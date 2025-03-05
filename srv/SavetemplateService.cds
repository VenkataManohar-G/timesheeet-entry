using {db as d} from '../db/schema';

type TemplateEntry {
    EmployeeExternalId  : String(60);
    TemplateId          : String(100);
    TemplateDescription : String(100);
    Date                : Date;
    WBSElement          : String(60);
    TaskType            : String(5);
    RecordedHours       : Decimal(4, 2);
    Day                 : Int16;
}

type MyTemplate {
    TemplateId          : String(100);
    TemplateDescription : String(100);
}

service SavetemplateService @(path: 'SavetemplateService') {
    entity Templates as projection on d.master.TemplateTable;
    action   SaveTemplate(entries : array of TemplateEntry) returns String;
    function GetTemplates(EmployeeExternalId : String(60))  returns array of MyTemplate;
    function GetTemplate(TemplateId : String(100))          returns array of Templates;
    action   DeleteTemplate(entries : array of TemplateEntry) returns String;

}
