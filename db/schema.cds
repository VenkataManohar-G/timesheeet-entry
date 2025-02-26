namespace db;
using { cuid } from '@sap/cds/common';
 
context master {
    entity TemplateTable : cuid {
        EmployeeExternalId : String(60);
        TemplateId : String(100);
        TemplateDescription: String(100);
        Date : Date;
        WBSElement : String(60);
        TaskType : String(5);
        RecordedHours : Decimal(4,2);
        Day: Int16;
    }
}