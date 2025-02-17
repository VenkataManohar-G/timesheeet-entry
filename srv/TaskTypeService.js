const cds = require('@sap/cds');
const proxy = require('@cap-js-community/odata-v2-adapter');
cds.on('bootstrap', ( app ) => app.use(proxy()));
module.exports = cds.service.impl(async function(srv) {
    const { MyTasks } = this.entities;
    const getAllTasks = async function (req) {
        const { yy1TimesheettasktypesCds } = require('./src/generated/YY1_TIMESHEETTASKTYPES_CDS');
        const { yy1_TimesheetTaskTypesApi } = yy1TimesheettasktypesCds();
        const TaskEntries = await yy1_TimesheetTaskTypesApi.requestBuilder().getAll().top(9999999).select(
                                                yy1_TimesheetTaskTypesApi.schema.ALL_FIELDS
                                ).execute({
                                    destinationName: 'MANAGEWORKFORCE'
                                });
        return TaskEntries;
    }

    srv.on('READ', MyTasks, async (req) => {
        var taskTab = await getAllTasks().then(
            TaskEntries =>{
                var aRecord = [];
                TaskEntries.forEach(element => {
                    var record = {};
                    record.TimeSheetTaskType = element.timeSheetTaskType;
                    record.TimeSheetTaskTypeText = element.timeSheetTaskTypeText;
                    aRecord.push(record);
                });
              return aRecord;
            }
       );
        return taskTab;
    })

});