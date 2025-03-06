const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
cds.on('bootstrap', ( app ) => app.use(proxy()));
module.exports = cds.service.impl(async function (srv) {
    srv.on('SaveTemplate', async (req) => {
        const { entries } = req.data;
        if (!entries || !Array.isArray(entries)) {
            return req.error(400, "Invalid data format.");
        }

        try {
            const result = await cds.transaction(req).run(
                INSERT.into('db.master.TemplateTable').entries(entries)
            );
            return { data: entries[0].TemplateId, message: "Template saved successfully!" };
        } catch (error) {
            return req.error(500, error);
        }
    });
    srv.on('GetTemplates', async (req) => {
        const EmployeeExternalId = req.data.EmployeeExternalId;
        var result;

        if(EmployeeExternalId){
            result = await cds.transaction(req).run(
                SELECT.distinct('TemplateId', 'TemplateDescription').from('db.master.TemplateTable').where({ EmployeeExternalId : EmployeeExternalId })
            );            
        }else{
            result = await cds.transaction(req).run(
                SELECT.distinct('TemplateId', 'TemplateDescription').from('db.master.TemplateTable')
            );
        }


        // Return data with the required properties
        return result.map(row => ({
            TemplateId: row.TemplateId,
            TemplateDescription: row.TemplateDescription
        }));
    });

    srv.on('GetTemplate', async (req) => {
        const TemplateId = req.data.TemplateId;
        if (!TemplateId) return req.error(400, "TemplateId is required.");

        const result = await cds.transaction(req).run(
            SELECT.from('db.master.TemplateTable').where({ TemplateId }).where({ TemplateId: TemplateId })
        );
        return result;
    });

    srv.on( 'DeleteTemplate', async (req) => {
        const { entries } = req.data;
        var TemplateId = entries[0].TemplateId;
        var EmployeeExternalId = entries[0].EmployeeExternalId;
        if (!TemplateId || !EmployeeExternalId) {
            return req.error(400, "TemplateId and TemplateDescription are required.");
        }
 
        try {
            const tx = cds.transaction(req);
 
 
            const existingTemplate = await tx.run(
                SELECT.one.from('db.master.TemplateTable')
                    .where({ TemplateId, EmployeeExternalId })
            );
 
            if (!existingTemplate) {
                return req.error(404, `Template with ID ${TemplateId} not found for employee ${EmployeeExternalId}.`);
            }
 
 
            await tx.run(
                DELETE.from('db.master.TemplateTable')
                    .where({ TemplateId, EmployeeExternalId })
            );
 
            return { message: "Template deleted successfully!" };
        } catch (error) {
            console.error("Error deleting template:", error);
            return req.error(500, "Database deletion failed.");
        }
    });

    srv.on( 'UpdateTemplate', async (req) => {
        const { entries } = req.data;
        const tx = cds.transaction(req);
        var TemplateId = entries[0].TemplateId;
        var EmployeeExternalId = entries[0].EmployeeExternalId;
        console.log(entries);
        if (!TemplateId || !EmployeeExternalId) {
            return req.error(400, "TemplateId and External Id are required.");
        }
       
        try {
            await tx.run(
                DELETE.from('db.master.TemplateTable')
                    .where({ TemplateId, EmployeeExternalId })
            );
            const result = await cds.transaction(req).run(
                INSERT.into('db.master.TemplateTable').entries(entries)
            );
            console.log("Updated records:", result);
            return { message: "Template updated successfully!" };
        } catch (error) {
            console.error("Error updating records:", error);
            return req.error(500, "Database updation failed.");
        }
    });

});