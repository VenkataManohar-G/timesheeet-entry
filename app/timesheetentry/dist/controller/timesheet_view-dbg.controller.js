sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/library",
    "sap/ui/export/library",
    "sap/m/library",
    "sap/m/Dialog",
    "sap/m/Button",
    "sap/m/Text",
    "sap/ui/model/Sorter",
    "sap/ui/model/Filter",
    "sap/m/SearchField",
    "sap/ui/table/Column",
    "sap/m/Column",
    "sap/m/Label",
    "sap/ui/model/type/String",
    "sap/ui/comp/library",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/Fragment",
    "sap/ui/core/message/Message",
    "sap/ushell/Container",
    "sap/ui/export/Spreadsheet",
    "sap/m/MessageBox"
], (Controller, coreLibrary, exportLibrary, mobileLibrary, Dialog, Button, Text, Sorter, Filter,
    SearchField, UIColumn, MColumn, Label, TypeString, compLibrary, FilterOperator, Fragment, Message, Container, Spreadsheet, MessageBox
) => {
    "use strict";
    var oDialogCreate, i, addDefaultEntries = [], configEntries = [], messageLogs = [], addEntriesLength = 0, savecount = 0, deletecount = 0, DateValue1, DateValue2, oOrderModel;
    var oModel, oAddEntryModel, oConfigModel,oFieldModel, oEmployeeModel, oWbsModel, oWbsModelAll, oTaskModel, oTimesheetModel, oTemplateModel, oWbsModelGlobal, oCompanyCodeModel, oTemplateModel, DateoModel, DateoModel1, oWbsModelData, oWbsModelDataAll, i18nModel;
    var MessageType = coreLibrary.MessageType, DialogType = mobileLibrary.DialogType, ButtonType = mobileLibrary.ButtonType;
    var oBusyDialogAdd, oBusyDialogoWbs, oBusyDialogDeleteAll, oBusyDialogPrevious, oBusyDialogTemplate, oBusyDialogTemplateDelete, oWbsInput, oEmployeeExtId, oEmployeeInternalId, oEmployeePersonId, oUserEmail, addCompanyCode, addCompanyCodeName, addWorkAgreement, messagaoDialog;
    var ValueState = coreLibrary.ValueState, EdmType = exportLibrary.EdmType;
    var messageLogModel = new sap.ui.model.json.JSONModel(), GetTemplatesModel = new sap.ui.model.json.JSONModel();
    var oFromDate, oToDate;
    var TemplateId, TemplateDesc, isAllWbsElement = 'X';
    return Controller.extend("timesheetentry.controller.timesheet_view", {
        formatWbsElement: function (value) {
            var Wbsstring, Wbsfinal;
            if (value) {
                Wbsstring = value.toString();
                Wbsfinal = Wbsstring.padStart(8, '0');
                return Wbsfinal;
            }
        },
        formatStatus: function (oValue) {
            if (oValue === '30') {
                return 'Success';
            } else if (oValue === '10') {
                return 'Information'
            } else {
                return 'Error'
            }
        },
        shellDetails: function () {
            var sUserEmail
            if (sap.ushell && sap.ushell.Container) {
                var oUserInfo = sap.ushell.Container.getService("UserInfo");
                if (oUserInfo) {
                    sUserEmail = oUserInfo.getEmail();
                    if (!sUserEmail) {
                        sUserEmail = 'rkirlampudi@answerthink.com';
                    }
                } else {
                    sUserEmail = 'rkirlampudi@answerthink.com';
                }
            } else {
                sUserEmail = 'rkirlampudi@answerthink.com';
            }
            return sUserEmail;
        },
        UserDetails: async function (Container) {
            oUserEmail = await this.shellDetails();
            if (oUserEmail) {
                this._getuserdetails(oUserEmail);
            }
        },
        _getuserdetails: function (oUserEmail) {
            var oFilter = [];
            var oEmployeeData, that, filterUser;
            filterUser = new sap.ui.model.Filter("Email", "EQ", oUserEmail); oUserEmail;
            oFilter.push(filterUser);
            var oBusyDialog = new sap.m.BusyDialog({
                title: "Loading Data",
                text: "Please wait....."
            });
            oBusyDialog.open();
            oEmployeeModel = this.getOwnerComponent().getModel("EmployeeService");
            oEmployeeModel.read("/MyEmployeeData", {
                filters: oFilter,
                urlParameters: { "$top": 999999 },
                success: function (response) {
                    var getemployeeData = {};
                    var oEmployeeExtId = this.getView().byId("id_employee_extid");
                    var oEmployeeEmploId = this.getView().byId("id_wrkid_add");
                    var oCostCenter = this.getView().byId("id_ccenter_add");
                    var oSearch = this.getView().byId("id_search");
                    var EmployeeIdName, CostcenterIdName;
                    oCompanyCodeModel = new sap.ui.model.json.JSONModel();
                    var that = this;
                    if (response.results.length !== 0) {
                        getemployeeData = response.results;
                        if (getemployeeData.length !== 0) {
                            oCompanyCodeModel.setData(response.results);
                            that.getView().setModel(oCompanyCodeModel, "CompanyCodes");
                            oEmployeeExtId.setText(getemployeeData[0].PersonWorkAgreementExternalID);
                            oEmployeeInternalId = getemployeeData[0].PersonWorkAgreement;
                            if (getemployeeData[0].PersonFullName) {
                                EmployeeIdName = getemployeeData[0].PersonWorkAgreement + " (" + getemployeeData[0].PersonFullName + ")";
                                oEmployeeEmploId.setText(EmployeeIdName);
                                oEmployeeEmploId.setVisible(true);
                            } else {
                                EmployeeIdName = getemployeeData[0].PersonWorkAgreement;
                                oEmployeeEmploId.setText(EmployeeIdName);
                                oEmployeeEmploId.setVisible(true);
                            }
                            if (getemployeeData[0].CostCenterDescription) {
                                CostcenterIdName = getemployeeData[0].CostCenter + " (" + getemployeeData[0].CostCenterDescription + ")";
                                oCostCenter.setText(CostcenterIdName);
                                oCostCenter.setVisible(true);
                            } else {
                                CostcenterIdName = getemployeeData[0].CostCenter;
                                oCostCenter.setText(CostcenterIdName);
                                oCostCenter.setVisible(true);
                            }
                            if (getemployeeData.length === 1) {
                                addCompanyCode = getemployeeData[0].CompanyCode;
                                addCompanyCodeName = getemployeeData[0].CompanyCodeName;
                            }
                            oSearch.setEnabled(true);
                        } else {
                            this.oReadSuccessMessageDialog = new Dialog({
                                type: DialogType.Message,
                                title: "Information",
                                state: ValueState.Warning,
                                content: new Text({ text: "No Data Found with the Selected Company Code!!..Please try with another" }),
                                beginButton: new Button({
                                    type: ButtonType.Emphasized,
                                    text: "Ok",
                                    press: function () {
                                        oEmployeeEmploId.setText('');
                                        oEmployeeExtId.setText('');
                                        oCostCenter.setText('');
                                        oSearch.setEnabled(false);
                                        this.oReadSuccessMessageDialog.close();
                                    }.bind(this)
                                })
                            });
                            this.oReadSuccessMessageDialog.open();
                        }
                    } else {
                        this.oReadSuccessMessageDialog = new Dialog({
                            type: DialogType.Message,
                            title: "Information",
                            state: ValueState.Warning,
                            content: new Text({ text: "No Employee Found" }),
                            beginButton: new Button({
                                type: ButtonType.Emphasized,
                                text: "Ok",
                                press: function () {
                                    oEmployeeEmploId.setText('');
                                    oEmployeeExtId.setText('');
                                    oCostCenter.setText('');
                                    oSearch.setEnabled(false);
                                    this.oReadSuccessMessageDialog.close();
                                }.bind(this)
                            })
                        });
                        this.oReadSuccessMessageDialog.open();
                    }
                    oBusyDialog.close();
                }.bind(this),
                error: function (error) {
                    this.oReadErrorMessageDialog = new Dialog({
                        type: DialogType.Message,
                        title: "Error",
                        state: ValueState.Error,
                        content: new Text({ text: "" + error + "" }),
                        beginButton: new Button({
                            type: ButtonType.Emphasized,
                            text: "Ok",
                            press: function () {
                                this.oReadErrorMessageDialog.close();
                            }.bind(this)
                        })
                    });
                    this.oReadErrorMessageDialog.open();
                    oBusyDialog.close();
                }.bind(this)
            });
        },
        onInit() {
            var that = this;
            this.UserDetails();
            oModel = this.getOwnerComponent().getModel();
            oTaskModel = this.getOwnerComponent().getModel("TaskTypeService");
            oTimesheetModel = this.getOwnerComponent().getModel("TimesheetService");
            that.getView().setModel(oTaskModel, "Tasks");
            oTemplateModel = this.getOwnerComponent().getModel("TemplateJSONData");
            that.getView().setModel(oTemplateModel, "Template");
            DateoModel = new sap.ui.model.json.JSONModel({
                start: '',
                end: '' // default end date + 7 days
            });
            that.getView().setModel(DateoModel, "DateModel");
            oOrderModel = this.getOwnerComponent().getModel("configurationModel");
            this.dateTimePeriod();
            this._configSettings();
            i18nModel = this.getView().getModel("i18n");

            oFieldModel = new sap.ui.model.json.JSONModel({          
                bHideColumn: true
            });
            that.getView().setModel(oFieldModel,"FieldProperty");

        },
        _configSettings: function () {
            var that = this;
            oConfigModel = new sap.ui.model.json.JSONModel();
            var configEntry = {};
            configEntry.Checked = true;
            configEntry.Id = '1';
            configEntry.Field = 'Task Type';
            configEntries.push(configEntry);
            var configEntry = {};
            configEntry.Checked = false;
            configEntry.Id = '2';
            configEntry.Field = 'Employee Wbs Element';
            configEntries.push(configEntry);
            var configEntry = {};
            configEntry.Checked = true;
            configEntry.Id = '3';
            configEntry.Field = 'Wbs Element';
            configEntries.push(configEntry);
            oConfigModel.setData(configEntries);
            that.getView().setModel(oConfigModel, "Settings");
            oConfigModel.refresh(true);
        },
        /*week Days Calculation*/
        dateTimePeriod: function () {
            var ostartDate = new Date();
            var ostartDay = ostartDate.getDay();
            var that = this;
            if (ostartDay === 6) {
                var enddate = new Date(new Date(ostartDate).getTime() + 518400000);
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: ostartDate,
                    end: new Date(new Date(ostartDate).getTime() + 518400000)
                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 518400000)) // getDate() + 6 default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 5) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 518400000)), //getDate() - 6
                    start: new Date(new Date(ostartDate).getTime() - 518400000),
                    end: ostartDate // default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 4) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: new Date(new Date(ostartDate).getTime() - 432000000),
                    end: new Date(new Date(ostartDate).getTime() + 86400000),
                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 432000000)), //getDate() - 5
                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 86400000 )) // getDate() + 1 default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 3) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: new Date(new Date(ostartDate).getTime() - 345600000),
                    end: new Date(new Date(ostartDate).getTime() + 172800000),
                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 345600000 )), //getDate() - 4
                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 172800000 )) // getDate() + 2 default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 2) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: new Date(new Date(ostartDate).getTime() - 259200000),
                    end: new Date(new Date(ostartDate).getTime() + 259200000),
                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 259200000 )), //getDate() - 3
                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 259200000 )) // getDate() + 3 default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 1) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: new Date(new Date(ostartDate).getTime() - 172800000),
                    end: new Date(new Date(ostartDate).getTime() + 345600000),
                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 172800000 )), //getDate() - 2
                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 345600000 )) // getDate() + 4) default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            } else if (ostartDay === 0) {
                DateoModel1 = new sap.ui.model.json.JSONModel({
                    start: new Date(new Date(ostartDate).getTime() - 86400000),
                    end: new Date(new Date(ostartDate).getTime() + 432000000),
                    // start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 86400000 )), //getDate() - 1
                    // end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 432000000 )) // getDate() + 5 default end date + 7 days
                });
                DateoModel1.refresh()
                that.getView().setModel(DateoModel1, "DateModel1");
            }
        },
        _datediff: function (oDate1, oDate2) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24;
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(oDate1.getFullYear(), oDate1.getMonth(), oDate1.getDate());
            const utc2 = Date.UTC(oDate2.getFullYear(), oDate2.getMonth(), oDate2.getDate());

            return Math.floor((utc2 - utc1) / _MS_PER_DAY);
        },
        handleDateChange: function (oEvent) {
            var searchBtn = this.getView().byId("id_search");
            var oRangeDate = [],
                sFrom = oEvent.getParameter("from"),
                sTo = oEvent.getParameter("to"),
                svalue = oEvent.getParameter("value"),
                bValid = oEvent.getParameter("valid"),
                oEventSource = oEvent.getSource();
            if (bValid) {
                oEventSource.setValueState(ValueState.None);
                oRangeDate = svalue.split("–");
                if (oRangeDate.length > 1) {
                    DateValue1 = oRangeDate[0].trim();
                    DateValue2 = oRangeDate[1].trim();
                    var diff = this._datediff(sFrom, sTo);
                    if (diff > 60) {
                        oEventSource.setValueState(ValueState.Error);
                        oEventSource.setValueStateText("Date Range shouldn't exceed more than 60 days");
                        searchBtn.setEnabled(false);
                    } else {
                        oEventSource.setValueState(ValueState.None);
                        oEventSource.setValueStateText("");
                        searchBtn.setEnabled(true);
                    }
                    //console.log(diff);
                } else {
                    DateValue1 = oRangeDate[0].trim();
                    DateValue2 = oRangeDate[0].trim();
                    searchBtn.setEnabled(true);
                }
            } else {
                oEventSource.setValueState(ValueState.Error);
                oEventSource.setValueStateText("Invalid Date");
                searchBtn.setEnabled(false);
            }
        },
        onFilter: function (oEvent) {
            var EmployeeId = this.getView().byId("id_employee_extid");
            var oEmployeevalue = EmployeeId.getText();
            var Date1 = DateValue1;
            var Date2 = DateValue2;
            if (oEmployeevalue === "" || Date1 === undefined || Date2 === undefined || Date1 === '' || Date2 === '') {
                this.oFillMessageDialog = new Dialog({
                    type: DialogType.Message,
                    title: "Error",
                    state: ValueState.Error,
                    content: new Text({ text: "Employee Id & Date are Mandatory" }),
                    beginButton: new Button({
                        type: ButtonType.Emphasized,
                        text: "Ok",
                        press: function () {
                            this.oFillMessageDialog.close();
                        }.bind(this)
                    })
                });
                this.oFillMessageDialog.open();
            } else {
                this._bindtimesheet(oEmployeevalue, Date1, Date2);
            }
        },
        _bindtimesheet: function (oEmployeeId, oDate1, oDate2) {
            var oFilter = [];
            var oTimesheetData, that, datevalue, filterUser, filterdate1, filterdate2, filterHours;;
            that = this;
            oTimesheetData = new sap.ui.model.json.JSONModel();
            filterUser = new sap.ui.model.Filter("PersonWorkAgreementExternalID", "EQ", oEmployeeId);
            oFilter.push(filterUser);
            if (oDate1 && oDate2) {
                var oDateRange = oDate1 + 'T00:00:00Z';
                var oDateRangeto = oDate2 + 'T23:59:59Z';
                var CreatedAtFilter = new sap.ui.model.Filter("TimeSheetDate", "BT", oDateRange, oDateRangeto);
                oFilter.push(CreatedAtFilter);
            } else if (oDate1) {
                var oDateRangefrom = oDate1 + 'T00:00:00Z';
                var oDateRangeto = oDate1 + 'T23:59:59Z';
                var CreatedAtFilter = new sap.ui.model.Filter("TimeSheetDate", "BT", oDateRangefrom, oDateRangeto);
                oFilter.push(CreatedAtFilter);
            }
            var oBusyDialog = new sap.m.BusyDialog({
                title: "Loading Data",
                text: "Please wait....."
            });
            oBusyDialog.open();
            oModel.read("/MyTimesheetDetails", {
                filters: oFilter,
                urlParameters: { "$top": 999999 },
                success: function (response) {
                    var Title;
                    console.log(response);
                    console.log(response.results);
                    oTimesheetData.setData(response.results);
                    that.getView().setModel(oTimesheetData, "Timesheet");
                    oBusyDialog.close();
                }.bind(this),
                error: function (error) {
                    console.log(error);
                    oBusyDialog.close();
                }.bind(this)
            });
        },
        onUpdateFinished: function () {
            var oTable = this.getView().byId("daysTable");
            var aItems = oTable.getItems();
            for (var i = 0; i < aItems.length; i++) {
                //console.log();
                if (aItems[i].getCells()[17].getText() === '60') {
                    aItems[i].getMultiSelectControl(/* bCreateIfNotExist = */ true).setEditable(false);
                } else {
                    aItems[i].getMultiSelectControl(/* bCreateIfNotExist = */ true).setEditable(true);
                }
            }
        },
        onSelectionChange: function (oEvent) {
            var oTable = oEvent.getSource();
            var aSelectedItems = oTable.getSelectedItems();
            var length = aSelectedItems.length;
            var oDeleteButton = this.getView().byId("id_button_cancel");
            var oDeletedEntry = false;
            if (length > 0) {
                try {
                    oDeleteButton.setEnabled(true);
                    aSelectedItems.forEach(function (oItem, Index) {
                        var oTimesheetStatus = oItem.getCells()[17].getText();
                        if (oTimesheetStatus === '60') {
                            oDeletedEntry = true;
                            throw 'Already deleted';
                        }
                    });
                } catch (error) {
                    oDeleteButton.setEnabled(false);
                }

            } else {
                oDeleteButton.setEnabled(false);
            }
        },
        /*Get Add Entry Fragment*/
        onAdd: function (oEvent) {
            var that = this;
            oDialogCreate = this.byId("id_dialogaddentries");
            oAddEntryModel = new sap.ui.model.json.JSONModel();
            for (i = 0; i <= 4; i++) {
                var addDefaultEntry = {};
                addDefaultEntry.Id = i;
                addDefaultEntry.TimesheetDate = '';
                addDefaultEntry.TaskType = '';
                addDefaultEntry.WBSElemt = '';
                addDefaultEntry.RecordedHours = '0';
                addDefaultEntry.RecordedQuantity = '0';
                addDefaultEntries.push(addDefaultEntry);
            }
            oAddEntryModel.setData(addDefaultEntries);
            that.getView().setModel(oAddEntryModel, "Entries");
            oAddEntryModel.refresh(true);
            if (!oDialogCreate) {
                oDialogCreate = new sap.ui.xmlfragment(this.getView().getId(), "timesheetentry.view.AddTimesheetEntries", this);
                this.getView().addDependent(oDialogCreate);
                oDialogCreate.open();
                var dialogPersonworkext = this.getView().byId("id_add_employee_extid");
                var dialogpersonaggre = this.getView().byId("id_add_wrkid");
                var dialogCopmapcycode = this.getView().byId("id_add_ccode");
                dialogPersonworkext.setText(this.getView().byId("id_employee_extid").getText());
                dialogpersonaggre.setText(this.getView().byId("id_wrkid_add").getText());
                TemplateId = '';
                TemplateDesc = '';
                if(isAllWbsElement){
                    this.getView().byId("id_wbs_elmt").setText("Wbs Element");
                }else{
                    this.getView().byId("id_wbs_elmt").setText("Employee Wbs Element");
                }
                if (addCompanyCode) {
                    dialogCopmapcycode.setSelectedKey(addCompanyCode);
                }
                if (addCompanyCodeName) {
                    dialogCopmapcycode.setValue(addCompanyCodeName);
                }

            } else {
                oDialogCreate.open();
                var dialogPersonworkext = this.getView().byId("id_add_employee_extid");
                var dialogpersonaggre = this.getView().byId("id_add_wrkid");
                var dialogCopmapcycode = this.getView().byId("id_add_ccode");
                dialogPersonworkext.setText(this.getView().byId("id_employee_extid").getText());
                dialogpersonaggre.setText(this.getView().byId("id_wrkid_add").getText());
                if(isAllWbsElement){
                    this.getView().byId("id_wbs_elmt").setText("Wbs Element");
                }else{
                    this.getView().byId("id_wbs_elmt").setText("Employee Wbs Element");
                }
                if (addCompanyCode) {
                    dialogCopmapcycode.setSelectedKey(addCompanyCode);
                }
                if (addCompanyCodeName) {
                    dialogCopmapcycode.setValue(addCompanyCodeName);
                }
            }
        },
        /*Add Entry*/
        onAddEntry: function (oEvent) {
            var that = this;
            var addDefaultEntry = {};
            i = i + 1;
            addDefaultEntry.Id = i;
            addDefaultEntry.TimesheetDate = '';
            addDefaultEntry.TaskType = '';
            addDefaultEntry.WBSElemt = '';
            addDefaultEntry.RecordedHours = '0';
            addDefaultEntry.RecordedQuantity = '0';
            addDefaultEntries.push(addDefaultEntry);
            oAddEntryModel.setData(addDefaultEntries);
            that.getView().setModel(oAddEntryModel, "Entries");
            oAddEntryModel.refresh(true);
        },
        /*Delete the Added Entry*/
        deleteRow: function (oEvent) {
            var that;
            that = this;
            var getRemoveIndex = oEvent.getParameter("listItem");
            var oCells = getRemoveIndex.getCells();
            var sId = oCells[0].getValue();
            var iId = sId * 1;
            const index = addDefaultEntries.findIndex((obj) => (obj.Id) === iId);
            if (index !== -1) {
                addDefaultEntries.splice(index, 1);
                oAddEntryModel.setData(addDefaultEntries);
                that.getView().setModel(oAddEntryModel, "Entries");
                oAddEntryModel.refresh(true);
            }
            var oTable = this.getView().byId("tableId1");
            oTable.removeItem(oEvent.getParameter("listItem"));
        },
        /*Close Add Entries Fragment*/
        onCloseDialog: function () {
            var that;
            that = this;
            addDefaultEntries = [];
            addEntriesLength = 0;
            oAddEntryModel.setData(addDefaultEntries);
            that.getView().setModel(oAddEntryModel, "Entries");
            oAddEntryModel.refresh(true);
            sap.ui.getCore().getMessageManager().removeAllMessages();
            this.getView().byId("id_dialogaddentries").close();
            this.getView().byId("id_add_entrysave").setEnabled(false);
            this.getView().byId("id_add_entry_submit").setEnabled(false);
            this.getView().byId("id_add_entrytemplate").setEnabled(false);
            this.getView().byId("id_templatecombo").setSelectedKey("");
            TemplateId = '';
            TemplateDesc = '';
        },
        handleDateChangeadd_entries: function (oEvent) {
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oSaveTemplate = this.getView().byId("id_add_entrytemplate");
            var that = this;
            var oRangeDate = [],
                sFrom = oEvent.getParameter("from"),
                sTo = oEvent.getParameter("to"),
                svalue = oEvent.getParameter("value"),
                bValid = oEvent.getParameter("valid"),
                oEventSource = oEvent.getSource();
            if (bValid) {
                oEventSource.setValueState(ValueState.None);
                oRangeDate = svalue.split("–");
                if (oRangeDate.length > 1) {
                    DateValue1 = oRangeDate[0].trim();
                    DateValue2 = oRangeDate[1].trim();
                    var diff = this._datediff(sFrom, sTo);
                    if (diff > 6) {
                        oEventSource.setValueState(ValueState.Error);
                        oEventSource.setValueStateText("Date Range should be with in 7 days");
                        oSaveBtn.setEnabled(false);
                        oSubmitBtn.setEnabled(false);
                        oSaveTemplate.setEnabled(true);
                    } else {
                        if (diff === 6) {
                            var ostartDate = new Date(DateValue1);
                            var ostartDay = ostartDate.getDay();
                            var oEndDate = new Date(DateValue2);
                            var oEndDate = oEndDate.getDay();
                            if (ostartDay !== 6 && oEndDate !== 5) {
                                oEventSource.setValueState(ValueState.Error);
                                oEventSource.setValueStateText("Date Range should start Week Days(Saturday - Friday)");
                                oSaveBtn.setEnabled(false);
                                oSubmitBtn.setEnabled(false);
                                oSaveTemplate.setEnabled(true);
                            }
                        } else if (diff <= 5) {
                            var ostartDate = new Date(DateValue1);
                            var ostartDay = ostartDate.getDay();
                            if (ostartDay === 6) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: ostartDate,
                                    end: new Date(new Date(ostartDate).getTime() + 518400000)
                                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 518400000 )) // getDate() + 6 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 5) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 518400000),
                                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 518400000 )), // getDate() -6
                                    end: ostartDate // default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 4) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 432000000),
                                    end: new Date(new Date(ostartDate).getTime() + 86400000)
                                    // start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 432000000 )), //getDate() - 5
                                    // end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 86400000 )) // getDate() + 1 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 3) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 345600000),
                                    end: new Date(new Date(ostartDate).getTime() + 172800000)
                                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 345600000 )), //getDate() - 4
                                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 172800000)) // getDate() + 2 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 2) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 259200000),
                                    end: new Date(new Date(ostartDate).getTime() + 259200000)
                                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 259200000)), //getDate() - 3
                                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 259200000)) //getDate() + 3 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 1) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 172800000),
                                    end: new Date(new Date(ostartDate).getTime() + 345600000)
                                    //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 172800000)), //getDate() - 2
                                    //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 345600000)) // getDate + 4 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            } else if (ostartDay === 0) {
                                DateoModel1 = new sap.ui.model.json.JSONModel({
                                    start: new Date(new Date(ostartDate).getTime() - 86400000),
                                    end: new Date(new Date(ostartDate).getTime() + 432000000)
                                    // start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 86400000)),//getDate() - 1
                                    // end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 432000000)) //getDate() + 5 default end date + 7 days
                                });
                                DateoModel1.refresh()
                                that.getView().setModel(DateoModel1, "DateModel1");
                            }
                            var that = this;
                            oAddEntryModel = new sap.ui.model.json.JSONModel();
                            addDefaultEntries = [];
                            for (i = 0; i <= 4; i++) {
                                var addDefaultEntry = {};
                                addDefaultEntry.Id = i;
                                addDefaultEntry.TimesheetDate = '';
                                addDefaultEntry.TaskType = '';
                                addDefaultEntry.WBSElemt = '';
                                addDefaultEntry.RecordedHours = '0';
                                addDefaultEntry.RecordedQuantity = '0';
                                addDefaultEntries.push(addDefaultEntry);
                            }
                            oAddEntryModel.setData(addDefaultEntries);
                            that.getView().setModel(oAddEntryModel, "Entries");
                            oAddEntryModel.refresh(true);
                        } else {
                            oEventSource.setValueState(ValueState.None);
                            oEventSource.setValueStateText("");
                            oSaveBtn.setEnabled(false);
                            oSubmitBtn.setEnabled(false);
                            oSaveTemplate.setEnabled(false);
                            var that = this;
                            oAddEntryModel = new sap.ui.model.json.JSONModel();
                            addDefaultEntries = [];
                            for (i = 0; i <= 4; i++) {
                                var addDefaultEntry = {};
                                addDefaultEntry.Id = i;
                                addDefaultEntry.TimesheetDate = '';
                                addDefaultEntry.TaskType = '';
                                addDefaultEntry.WBSElemt = '';
                                addDefaultEntry.RecordedHours = '0';
                                addDefaultEntry.RecordedQuantity = '0';
                                addDefaultEntries.push(addDefaultEntry);
                            }
                            oAddEntryModel.setData(addDefaultEntries);
                            that.getView().setModel(oAddEntryModel, "Entries");
                            oAddEntryModel.refresh(true);
                        }

                    }
                } else {
                    DateValue1 = oRangeDate[0].trim();
                    DateValue2 = oRangeDate[0].trim();
                    var ostartDate = new Date(DateValue1);
                    var ostartDay = ostartDate.getDay();
                    if (ostartDay === 6) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: ostartDate,
                            end: new Date(new Date(ostartDate).getTime() + 518400000)
                            //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 518400000 )) // getDate() + 6 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 5) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 518400000),
                            //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 518400000 )), // getDate() -6
                            end: ostartDate // default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 4) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 432000000),
                            end: new Date(new Date(ostartDate).getTime() + 86400000)
                            // start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 432000000 )), //getDate() - 5
                            // end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 86400000 )) // getDate() + 1 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 3) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 345600000),
                            end: new Date(new Date(ostartDate).getTime() + 172800000)
                            //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 345600000 )), //getDate() - 4
                            //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 172800000)) // getDate() + 2 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 2) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 259200000),
                            end: new Date(new Date(ostartDate).getTime() + 259200000)
                            //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 259200000)), //getDate() - 3
                            //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 259200000)) //getDate() + 3 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 1) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 172800000),
                            end: new Date(new Date(ostartDate).getTime() + 345600000)
                            //start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 172800000)), //getDate() - 2
                            //end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 345600000)) // getDate + 4 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    } else if (ostartDay === 0) {
                        DateoModel1 = new sap.ui.model.json.JSONModel({
                            start: new Date(new Date(ostartDate).getTime() - 86400000),
                            end: new Date(new Date(ostartDate).getTime() + 432000000)
                            // start: new Date(new Date().setDate(new Date(ostartDate).getTime() - 86400000)),//getDate() - 1
                            // end: new Date(new Date().setDate(new Date(ostartDate).getTime() + 432000000)) //getDate() + 5 default end date + 7 days
                        });
                        DateoModel1.refresh()
                        that.getView().setModel(DateoModel1, "DateModel1");
                    }
                    oSaveBtn.setEnabled(true);
                    oSubmitBtn.setEnabled(true);
                    var that = this;
                    oAddEntryModel = new sap.ui.model.json.JSONModel();
                    addDefaultEntries = [];
                    for (i = 0; i <= 4; i++) {
                        var addDefaultEntry = {};
                        addDefaultEntry.Id = i;
                        addDefaultEntry.TimesheetDate = '';
                        addDefaultEntry.TaskType = '';
                        addDefaultEntry.WBSElemt = '';
                        addDefaultEntry.RecordedHours = '0';
                        addDefaultEntry.RecordedQuantity = '0';
                        addDefaultEntries.push(addDefaultEntry);
                    }
                    oAddEntryModel.setData(addDefaultEntries);
                    that.getView().setModel(oAddEntryModel, "Entries");
                    oAddEntryModel.refresh(true);
                }
            } else {
                oEventSource.setValueState(ValueState.Error);
                oEventSource.setValueStateText("Invalid Date");
                oSaveBtn.setEnabled(false);
                oSubmitBtn.setEnabled(false);
            }
        },
        adddatechange: function (oEvent) {
            var odateSource = oEvent.getSource();
            var odateValue = odateSource.getValue();
            var odateConv = new Date(odateValue);
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oTemplteBtn = this.getView().byId("id_add_entrytemplate");
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oDateModelRead = this.getView().getModel("DateModel1").getProperty('/');
            var ostartDate = oDateFormat.format(oDateModelRead.start);
            var oendDate = oDateFormat.format(oDateModelRead.end);
            var odateconv1 = oDateFormat.format(odateConv);
            //console.log(oDateModelRead);
            if (odateconv1 >= ostartDate && odateconv1 <= oendDate) {
                odateSource.setValueState(ValueState.None);
                odateSource.setValueStateText("");
                oSaveBtn.setEnabled(true);
                oSubmitBtn.setEnabled(true);
                oTemplteBtn.setEnabled(true);
            } else {
                odateSource.setValueState(ValueState.Error);
                odateSource.setValueStateText("Date should be in the selected Time Period");
                oSaveBtn.setEnabled(false);
                oSubmitBtn.setEnabled(false);
                oTemplteBtn.setEnabled(false);
            }
        },
        taskChange: function (oEvent) {
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oTemplteBtn = this.getView().byId("id_add_entrytemplate");
            var oValidatedComboBox = oEvent.getSource(),
                sSelectedKey = oValidatedComboBox.getSelectedKey(),
                sValue = oValidatedComboBox.getValue();
            if (!sSelectedKey && sValue) {
                oValidatedComboBox.setValueState(ValueState.Error);
                oValidatedComboBox.setValueStateText("Please enter a valid Task Type");
                oSaveBtn.setEnabled(false);
                oSubmitBtn.setEnabled(false);
                oTemplteBtn.setEnabled(false);
            } else {
                oValidatedComboBox.setValueState(ValueState.None);
                oSaveBtn.setEnabled(true);
                oSubmitBtn.setEnabled(true);
                oTemplteBtn.setEnabled(true);
            }
        },
        wbsChange: function (oEvent) {
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oTemplteBtn = this.getView().byId("id_add_entrytemplate");
            var oValidatedComboBox = oEvent.getSource(),
                sSelectedKey = oValidatedComboBox.getSelectedKey(),
                sValue = oValidatedComboBox.getValue();
            if (!sSelectedKey && sValue) {
                oValidatedComboBox.setValueState(ValueState.Error);
                oValidatedComboBox.setValueStateText("Please enter a valid WBS Element");
                oSaveBtn.setEnabled(false);
                oSubmitBtn.setEnabled(false);
                oTemplteBtn.setEnabled(false);
            } else {
                oValidatedComboBox.setValueState(ValueState.None);
                oSaveBtn.setEnabled(true);
                oSubmitBtn.setEnabled(true);
                oTemplteBtn.setEnabled(true);
            }
        },
        getWbsElement: function (oExternalId, currentDateVal) {
            var oFilter = [];
            var that = this;
            var filterUser, filterYear, filterMonth;
            var oFiscalyear, oMonth;
            var currentDate = new Date(currentDateVal);
            oFiscalyear = currentDate.getFullYear();
            oMonth = currentDate.getMonth() + 1;
            var filterMonthstring = oMonth.toString();
            var monthfinalValue = filterMonthstring.padStart(3, '0');
            oWbsModel = this.getOwnerComponent().getModel("WbsElementService");
            oWbsModelData = new sap.ui.model.json.JSONModel();
            filterUser = new sap.ui.model.Filter("PersonExternalID", "EQ", oExternalId);
            oFilter.push(filterUser);
            filterYear = new sap.ui.model.Filter("FiscalYear", "EQ", oFiscalyear);
            oFilter.push(filterYear);
            filterMonth = new sap.ui.model.Filter("FiscalPeriod", "EQ", monthfinalValue);
            oFilter.push(filterMonth)
            oBusyDialogoWbs = new sap.m.BusyDialog({
                title: "Loading Data",
                text: "Please wait....."
            });
            oBusyDialogoWbs.open();
            oWbsModel.read("/MyWbsElement", {
                filters: oFilter,
                urlParameters: { "$top": 999999 },
                success: function (response) {
                    //console.log(response);
                    // console.log(response.results);
                    if (response.results.length !== 0) {
                        oWbsModelData.setData(response.results);
                        that.getView().setModel(oWbsModelData, "ResourceWbs");
                        that._setwbsDialog();
                    } else {
                        MessageBox.warning("No Wbs Element Data Found. Please try with another Date..");
                        oBusyDialogoWbs.close();
                    }
                }.bind(this),
                error: function (error) {
                    // console.log(error);
                    oBusyDialogoWbs.close();
                }.bind(this)
            });
        },
        getWbsElementAll: function () {
            var that = this;
            oWbsModelAll = this.getOwnerComponent().getModel("WbsElementServiceAll");
            oWbsModelDataAll = new sap.ui.model.json.JSONModel();
            oBusyDialogoWbs = new sap.m.BusyDialog({
                title: "Loading Data",
                text: "Please wait....."
            });
            oBusyDialogoWbs.open();
            oWbsModelAll.read("/MyWbsElementAll", {
                urlParameters: { "$top": 999999 },
                success: function (response) {
                    if (response.results.length !== 0) {
                        oWbsModelDataAll.setData(response.results);
                        that.getView().setModel(oWbsModelDataAll, "ResourceWbsAll");
                        that._setwbsAllDialog();
                    } else {
                        MessageBox.warning("No Wbs Element Data Found.");
                        oBusyDialogoWbs.close();
                    }
                }.bind(this),
                error: function (error) {
                    // console.log(error);
                    oBusyDialogoWbs.close();
                }.bind(this)
            });
        },
        /*WBS Value Help*/
        onAddWbsVH: function (oEvent) {
            oWbsInput = oEvent.getSource();
            var oEmployeeFilter
            var oCurrentDate = oEvent.getSource().getParent().getCells()[1].getValue();
            var oEmployeeExtIDvalue = this.getView().byId("id_employee_extid").getText();
           if (oOrderModel.oData.configFile[0].WbsElementEmployee === true) {
                oEmployeeFilter = true;
            } else {
                oEmployeeFilter = false;
            }
            console.log(oOrderModel);
            if(isAllWbsElement){
                this.getWbsElementAll();
            }else{
                this.getWbsElement(oEmployeeExtIDvalue, oCurrentDate);
            }
            

        },
        _setwbsDialog: function () {
            this._oBasicSearchFieldWithSuggestionsWbs = new SearchField();
            this.pDialogWithSuggestionsWbs = this.loadFragment({
                name: "timesheetentry.view.WbsVH"
            }).then(function (oDialogSuggestionsWbs) {
                var oFilterBar = oDialogSuggestionsWbs.getFilterBar(), oColumnEngProject, oColumnEngProjectName, oColumnWrkPackage,
                    oColumnWorkPackageName, oColumnWBSElementInternalID, oColumnEngagementProjectResourceType, oColumnEngagementProjResourceTypeText, oColumnEngagementProjResource,
                    oColumnEngagementProjResourceText, oColumnWorkPackageStartDate, oColumnWorkPackageEndDate;
                this._oVHDWithSuggestionsWbs = oDialogSuggestionsWbs;
                this.getView().addDependent(oDialogSuggestionsWbs);
                // Set key fields for filtering in the Define Conditions Tab
                oDialogSuggestionsWbs.setRangeKeyFields([{
                    label: "Engagement Project",
                    key: "EngagementProject",
                    type: "string",
                    typeInstance: new TypeString({}, {
                        maxLength: 20
                    })
                }]);
                // Set Basic Search for FilterBar
                oFilterBar.setFilterBarExpanded(false);
                oFilterBar.setBasicSearch(this._oBasicSearchFieldWithSuggestionsWbs);

                // Trigger filter bar search when the basic search is fired
                this._oBasicSearchFieldWithSuggestionsWbs.attachSearch(function () {
                    oFilterBar.search();
                });
                oDialogSuggestionsWbs.getTableAsync().then(function (oTable) {
                    // For Desktop and tabled the default table is sap.ui.table.Table
                    if (oTable.bindRows) {
                        // Bind rows to the ODataModel and add columns
                        oTable.bindAggregation("rows", {
                            path: "ResourceWbs>/",
                            events: {
                                dataReceived: function () {
                                    oDialogSuggestionsWbs.update();
                                }
                            }
                        });
                        oColumnEngProject = new UIColumn({ label: new Label({ text: "Engagement Project" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProject}" }) });
                        oColumnEngProject.data({
                            fieldName: "EngagementProject"
                        });
                        oTable.addColumn(oColumnEngProject);

                        oColumnEngProjectName = new UIColumn({ label: new Label({ text: "Engagement Project Name" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProjectName}" }) });
                        oColumnEngProjectName.data({
                            fieldName: "EngagementProjectName"
                        });
                        oTable.addColumn(oColumnEngProjectName);

                        oColumnWrkPackage = new UIColumn({ label: new Label({ text: "Work Package" }), template: new Text({ wrapping: false, text: "{ResourceWbs>WorkPackage}" }) });
                        oColumnWrkPackage.data({
                            fieldName: "WorkPackage"
                        });
                        oTable.addColumn(oColumnWrkPackage);

                        oColumnWorkPackageName = new UIColumn({ label: new Label({ text: "Work Package Name" }), template: new Text({ wrapping: false, text: "{ResourceWbs>WorkPackageName}" }) });
                        oColumnWorkPackageName.data({
                            fieldName: "WorkPackageName"
                        });
                        oTable.addColumn(oColumnWorkPackageName);

                        oColumnWBSElementInternalID = new UIColumn({ label: new Label({ text: "Work Package InternalId" }), template: new Text({ wrapping: false, text: "{ResourceWbs>WBSElementInternalID}" }) });
                        oColumnWBSElementInternalID.data({
                            fieldName: "WBSElementInternalID"
                        });
                        oTable.addColumn(oColumnWBSElementInternalID);

                        oColumnEngagementProjectResourceType = new UIColumn({ label: new Label({ text: "Project Resource Type" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProjectResourceType}" }) });
                        oColumnEngagementProjectResourceType.data({
                            fieldName: "EngagementProjectResourceType"
                        });
                        oTable.addColumn(oColumnEngagementProjectResourceType);

                        oColumnEngagementProjResourceTypeText = new UIColumn({ label: new Label({ text: "Project Resource Text" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProjResourceTypeText}" }) });
                        oColumnEngagementProjResourceTypeText.data({
                            fieldName: "EngagementProjResourceTypeText"
                        });
                        oTable.addColumn(oColumnEngagementProjResourceTypeText);

                        oColumnEngagementProjResource = new UIColumn({ label: new Label({ text: "Project Resource" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProjectResource}" }) });
                        oColumnEngagementProjResource.data({
                            fieldName: "EngagementProjectResource"
                        });
                        oTable.addColumn(oColumnEngagementProjResource);

                        oColumnEngagementProjResourceText = new UIColumn({ label: new Label({ text: "Project Resource Text" }), template: new Text({ wrapping: false, text: "{ResourceWbs>EngagementProjResourceText}" }) });
                        oColumnEngagementProjResourceText.data({
                            fieldName: "EngagementProjResourceText"
                        });
                        oTable.addColumn(oColumnEngagementProjResourceText);

                        oColumnWorkPackageStartDate = new UIColumn({ label: new Label({ text: "Startdate" }), template: new Text({ wrapping: false, text: "{ResourceWbs>WorkPackageStartDate}" }) });
                        oColumnWorkPackageStartDate.data({
                            fieldName: "WorkPackageStartDate"
                        });
                        oTable.addColumn(oColumnWorkPackageStartDate);

                        oColumnWorkPackageEndDate = new UIColumn({ label: new Label({ text: "Enddate" }), template: new Text({ wrapping: false, text: "{ResourceWbs>WorkPackageEndDate}" }) });
                        oColumnWorkPackageEndDate.data({
                            fieldName: "WorkPackageEndDate"
                        });
                        oTable.addColumn(oColumnWorkPackageEndDate);
                    }
                }.bind(this));
                oDialogSuggestionsWbs.open();
                oBusyDialogoWbs.close();
            }.bind(this));
        },
        onValueHelpWbsVHOkPress: function (oEvent) {
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oTemplteBtn = this.getView().byId("id_add_entrytemplate");
            var aTokens = oEvent.getParameter("tokens");
            if (aTokens.length > 0) {
                var oText = aTokens[0].getKey();
                var oselectedSet = aTokens[0].getAggregation("customData");
                var oselectedData = oselectedSet[0].getProperty("value");
                oWbsInput.setValue(oselectedData.WorkPackage + '-' + oselectedData.EngagementProjectResource);
                oWbsInput.setValueState(ValueState.None);
                oWbsInput.setValueStateText("");
                oSaveBtn.setEnabled(true);
                oSubmitBtn.setEnabled(true);
                oTemplteBtn.setEnabled(true);
                //console.log(oselectedData.WorkPackage);
            }
            this._oVHDWithSuggestionsWbs.close();
        },
        onValueHelpWbsVHCancelPress: function (oEvent) {
            this._oVHDWithSuggestionsWbs.close();
        },
        onValueHelpWbsVHAfterClose: function (oEvent) {
            this._oVHDWithSuggestionsWbs.destroy();
        },
        onFilterBarWithSuggestionsWbsVHSearch: function (oEvent) {
            var sSearchQuery = this._oBasicSearchFieldWithSuggestionsWbs.getValue(),
                aSelectionSet = oEvent.getParameter("selectionSet"),
                aFilters = aSelectionSet.reduce(function (aResult, oControl) {
                    if (oControl.getValue()) {
                        aResult.push(new Filter({
                            path: oControl.getName(),
                            operator: FilterOperator.Contains,
                            value1: oControl.getValue()
                        }));
                    }

                    return aResult;
                }, []);

            aFilters.push(new Filter({
                filters: [
                    new Filter({ path: "EngagementProject", operator: FilterOperator.Contains, value1: sSearchQuery }),
                ],
                and: false
            }));

            this._filterTableWithSuggestionsWbs(new Filter({
                filters: aFilters,
                and: true
            }));
        },
        _filterTableWithSuggestionsWbs: function (oFilter) {
            var oVHD = this._oVHDWithSuggestionsWbs;
            oVHD.getTableAsync().then(function (oTable) {
                if (oTable.bindRows) {
                    oTable.getBinding("rows").filter(oFilter);
                }
                if (oTable.bindItems) {
                    oTable.getBinding("items").filter(oFilter);
                }
                oVHD.update();
            });
        },
        /*WBS Value Help*/
        /*WBS Value Help All*/
        _setwbsAllDialog: function () {
            this._oBasicSearchFieldWithSuggestionsWbsAll = new SearchField();
            this.pDialogWithSuggestionsWbsAll = this.loadFragment({
                name: "timesheetentry.view.WbsAllVH"
            }).then(function (oDialogSuggestionsWbsAll) {
                var oFilterBar = oDialogSuggestionsWbsAll.getFilterBar(), oColumnEngProject, oColumnEngProjectName, oColumnWrkPackage,
                    oColumnWorkPackageName, oColumnWBSElementInternalID, oColumnEngagementProjectResourceType, oColumnEngagementProjResourceTypeText, oColumnEngagementProjResource,
                    oColumnEngagementProjResourceText, oColumnWorkPackageStartDate, oColumnWorkPackageEndDate;
                this._oVHDWithSuggestionsWbsAll = oDialogSuggestionsWbsAll;
                this.getView().addDependent(oDialogSuggestionsWbsAll);
                // Set key fields for filtering in the Define Conditions Tab
                oDialogSuggestionsWbsAll.setRangeKeyFields([{
                    label: "Project External Id",
                    key: "ProjectExternalID",
                    type: "string",
                    typeInstance: new TypeString({}, {
                        maxLength: 20
                    })
                }]);
                // Set Basic Search for FilterBar
                oFilterBar.setFilterBarExpanded(false);
                oFilterBar.setBasicSearch(this._oBasicSearchFieldWithSuggestionsWbsAll);

                // Trigger filter bar search when the basic search is fired
                this._oBasicSearchFieldWithSuggestionsWbsAll.attachSearch(function () {
                    oFilterBar.search();
                });
                oDialogSuggestionsWbsAll.getTableAsync().then(function (oTable) {
                    // For Desktop and tabled the default table is sap.ui.table.Table
                    if (oTable.bindRows) {
                        // Bind rows to the ODataModel and add columns
                        oTable.bindAggregation("rows", {
                            path: "ResourceWbsAll>/",
                            events: {
                                dataReceived: function () {
                                    oDialogSuggestionsWbsAll.update();
                                }
                            }
                        });
                        oColumnEngProject = new UIColumn({ label: new Label({ text: "Project External" }), template: new Text({ wrapping: false, text: "{ResourceWbsAll>ProjectExternalID}" }) });
                        oColumnEngProject.data({
                            fieldName: "ProjectExternalID"
                        });
                        oTable.addColumn(oColumnEngProject);

                        oColumnEngProjectName = new UIColumn({ label: new Label({ text: "Project Description" }), template: new Text({ wrapping: false, text: "{ResourceWbsAll>ProjectDescription}" }) });
                        oColumnEngProjectName.data({
                            fieldName: "ProjectDescription"
                        });
                        oTable.addColumn(oColumnEngProjectName);


                        oColumnWBSElementInternalID = new UIColumn({ label: new Label({ text: "Work Package InternalId" }), template: new Text({ wrapping: false, text: "{ResourceWbsAll>WBSElementInternalID}" }) });
                        oColumnWBSElementInternalID.data({
                            fieldName: "WBSElementInternalID"
                        });
                        oTable.addColumn(oColumnWBSElementInternalID);

                        oColumnWorkPackageStartDate = new UIColumn({ label: new Label({ text: "Startdate" }), template: new Text({ wrapping: false, text: "{ResourceWbsAll>PlannedStartDate}" }) });
                        oColumnWorkPackageStartDate.data({
                            fieldName: "PlannedStartDate"
                        });
                        oTable.addColumn(oColumnWorkPackageStartDate);

                        oColumnWorkPackageEndDate = new UIColumn({ label: new Label({ text: "Enddate" }), template: new Text({ wrapping: false, text: "{ResourceWbsAll>PlannedEndDate}" }) });
                        oColumnWorkPackageEndDate.data({
                            fieldName: "PlannedEndDate"
                        });
                        oTable.addColumn(oColumnWorkPackageEndDate);
                    }
                }.bind(this));
                oDialogSuggestionsWbsAll.open();
                oBusyDialogoWbs.close();
            }.bind(this));
        },
        onValueHelpWbsAllVHOkPress: function (oEvent) {
            var oSaveBtn = this.getView().byId("id_add_entrysave");
            var oSubmitBtn = this.getView().byId("id_add_entry_submit");
            var oTemplteBtn = this.getView().byId("id_add_entrytemplate");
            var aTokens = oEvent.getParameter("tokens");
            if (aTokens.length > 0) {
                var oText = aTokens[0].getKey();
                var oselectedSet = aTokens[0].getAggregation("customData");
                var oselectedData = oselectedSet[0].getProperty("value");
                oWbsInput.setValue(oselectedData.WBSElementInternalID);
                oWbsInput.setValueState(ValueState.None);
                oWbsInput.setValueStateText("");
                oSaveBtn.setEnabled(true);
                oSubmitBtn.setEnabled(true);
                oTemplteBtn.setEnabled(true);
                //console.log(oselectedData.WorkPackage);
            }
            this._oVHDWithSuggestionsWbsAll.close();
        },
        onValueHelpWbsAllVHCancelPress: function (oEvent) {
            this._oVHDWithSuggestionsWbsAll.close();
        },
        onValueHelpWbsAllVHAfterClose: function (oEvent) {
            this._oVHDWithSuggestionsWbsAll.destroy();
        },
        onFilterBarWithSuggestionsWbsAllVHSearch: function (oEvent) {
            var sSearchQuery = this._oBasicSearchFieldWithSuggestionsWbs.getValue(),
                aSelectionSet = oEvent.getParameter("selectionSet"),
                aFilters = aSelectionSet.reduce(function (aResult, oControl) {
                    if (oControl.getValue()) {
                        aResult.push(new Filter({
                            path: oControl.getName(),
                            operator: FilterOperator.Contains,
                            value1: oControl.getValue()
                        }));
                    }

                    return aResult;
                }, []);

            aFilters.push(new Filter({
                filters: [
                    new Filter({ path: "ProjectExternalID", operator: FilterOperator.Contains, value1: sSearchQuery }),
                ],
                and: false
            }));

            this._filterTableWithSuggestionsWbsAll(new Filter({
                filters: aFilters,
                and: true
            }));
        },
        _filterTableWithSuggestionsWbsAll: function (oFilter) {
            var oVHD = this._oVHDWithSuggestionsWbsAll;
            oVHD.getTableAsync().then(function (oTable) {
                if (oTable.bindRows) {
                    oTable.getBinding("rows").filter(oFilter);
                }
                if (oTable.bindItems) {
                    oTable.getBinding("items").filter(oFilter);
                }
                oVHD.update();
            });
        },
        /*WBS Value Help All*/
        /*Submit Entries*/
        _entriesValidations: function (oList) {
            var oEmpExtValueadd = this.byId("id_add_employee_extid");
            var oEmpWrkId = this.byId("id_add_wrkid");
            var oCodeId = this.byId("id_add_ccode");
            var oCheck;
            var CompanyCode = oCodeId.getSelectedKey();
            var PersonWorkAgreementExternalID = oEmpExtValueadd.getText();
            var PersonWorkAgreement = oEmpWrkId.getText();
            oCheck = false;
            if (CompanyCode == '' || CompanyCode == null) {
                oCheck = true;
            }
            if (PersonWorkAgreementExternalID == '' || PersonWorkAgreementExternalID == null) {
                oCheck = true;
            }
            if (PersonWorkAgreement == '' || PersonWorkAgreement == null) {
                oCheck = true;
            }
            if (oCheck === false) {
                for (let i = 0; i < oList.length; i++) {
                    if (oCheck === false) {
                        if ((oList[i].TimesheetDate == null || oList[i].TimesheetDate == '') &&
                            (oList[i].RecordedHours == null || oList[i].RecordedHours == '' || oList[i].RecordedHours == '0') &&
                            ((oList[i].TaskType == null && oList[i].WBSElemt == null) || (oList[i].TaskType == '' && oList[i].WBSElemt == ''))
                        ) {
                            oCheck = false;
                        } else {
                            if (oList[i].TimesheetDate == null || oList[i].TimesheetDate == '') {
                                oCheck = true;
                            }
                            if (oList[i].RecordedHours == null || oList[i].RecordedHours == '') {
                                oCheck = true;
                            }
                            if (oList[i].TaskType == null || oList[i].TaskType == '') {
                                if (oList[i].WBSElemt == null || oList[i].WBSElemt == '') {
                                    oCheck = true;
                                }
                            }
                        }
                        //end//
                    }

                }
            }
            return oCheck;
        },
        onsubmitDialog: async function () {
            var that;
            that = this;
            var oViewPage = that.getView();
            oBusyDialogAdd = new sap.m.BusyDialog({
                title: "Saving",
                text: "Please wait....."
            });
            oBusyDialogAdd.open();
            var oListData = [];
            var oRecordEntries = [];
            var oMsgButton = this.byId("id_alert");
            var oMessageManager = sap.ui.getCore().getMessageManager();
            oViewPage.setModel(oMessageManager.getMessageModel(), "message");
            sap.ui.getCore().getMessageManager().removeAllMessages();
            var oEmpExtValueadd = this.byId("id_add_employee_extid");
            var oEmpWrkId = this.byId("id_add_wrkid");
            var oCodeId = this.byId("id_add_ccode");
            var oCostC = this.byId("id_add_ccenter");
            var RecordTable = this.getView().byId("tableId1");
            var newEntries = RecordTable.getBinding("items");
            oListData = newEntries.oList;
            var oModelupload = this.getOwnerComponent().getModel();
            //console.log(oListData);
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oCheck = this._entriesValidations(oListData);
            if (oCheck === false) {
                for (let i = 0; i < oListData.length; i++) {
                    //addEntriesLength = addEntriesLength + 1;
                    if ((oListData[i].TimesheetDate == null || oListData[i].TimesheetDate == '') &&
                        (oListData[i].RecordedHours == null || oListData[i].RecordedHours == '' || oListData[i].RecordedHours == '0') &&
                        ((oListData[i].TaskType == null && oListData[i].WBSElemt == null) || (oListData[i].TaskType == '' && oListData[i].WBSElemt == ''))
                    ) {
                        continue;
                    } else {
                        var TimesheetData = {};
                        var oWbsActivity = [];
                        addEntriesLength = addEntriesLength + 1;
                        //var tostring = addEntriesLength.toString();
                        //TimesheetData.TimeSheetRecord = tostring;
                        TimesheetData.PersonWorkAgreementExternalID = oEmpExtValueadd.getText();
                        TimesheetData.PersonWorkAgreement = oEmployeeInternalId;
                        var startdate = oDateFormat.format(oListData[i].TimesheetDate);
                        TimesheetData.TimeSheetDate = startdate + 'T00:00:00';
                        TimesheetData.TimeSheetStatus = '30';
                        TimesheetData.TimeSheetOperation = 'C';
                        TimesheetData.CompanyCode = this.getView().byId("id_add_ccode").getSelectedKey();
                        TimesheetData.TimeSheetIsExecutedInTestRun = false;
                        TimesheetData.TimeSheetIsReleasedOnSave = true;
                        TimesheetData.TimeSheetDataFields_RecordedHours = oListData[i].RecordedHours;
                        TimesheetData.TimeSheetDataFields_RecordedQuantity = oListData[i].RecordedHours;
                        if (oListData[i].WBSElemt) {
                            oWbsActivity = oListData[i].WBSElemt.split("-");
                            TimesheetData.TimeSheetDataFields_WBSElement = oWbsActivity[0];
                            TimesheetData.TimeSheetDataFields_ActivityType = oWbsActivity[1];
                        }
                        TimesheetData.TimeSheetDataFields_TimeSheetTaskType = oListData[i].TaskType;
                        TimesheetData.TimeSheetDataFields_ReceiverPubSecFuncnlArea = 'YB40';
                        TimesheetData.TimeSheetDataFields_HoursUnitOfMeasure = 'H';
                        if (oListData[i].TaskType) {
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = 'WORK';
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = 'NONE';
                        } else {
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = '';
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = '';
                        }

                        oRecordEntries[i] = TimesheetData;
                        try {
                            let result = await that._postEntries(oTimesheetModel, oRecordEntries[i], i, addEntriesLength);    
                        } catch (error) {
                         continue;    
                        }
                        
                    }
                }
                messageLogModel.setData(messageLogs);
                that.getView().setModel(messageLogModel, "CreateMessageData");
                messageLogModel.refresh(true);
                that._logmessage();
            } else {
                var oMessage = new Message({
                    message: "Fill all the details- Employee External Id,Person Worker Agreement ID,Company Code,Task Type/WBS Element, Recorded Hours",
                    type: MessageType.Error,
                    target: "/Dummy",
                    processor: this.getView().getModel()
                });
                oMsgButton.setIcon("sap-icon://error");
                oMsgButton.setType("Reject");
                sap.ui.getCore().getMessageManager().addMessages(oMessage);
                oBusyDialogAdd.close();
            }

        },
        _postEntries: function (oModelEntry, oRecordEntry, i, entryLength) {
            return new Promise((resolve, reject) => {
                oModelEntry.create("/MyTimesheet", oRecordEntry, {
                    success: function (data, response) {
                        savecount = savecount + 1;
                        if (response.statusCode == '201') {
                            var messagelog = {};
                            messagelog.Status = 'S';
                            messagelog.RecordedHours = oRecordEntry.TimeSheetDataFields_RecordedHours;
                            messagelog.Taskid = oRecordEntry.TimeSheetDataFields_TimeSheetTaskType;
                            messagelog.Wbselement = oRecordEntry.TimeSheetDataFields_WBSElement;
                            messagelog.TimeSheetDate = oRecordEntry.TimeSheetDate
                            messagelog.Message = 'Entry successfully created on "' + oRecordEntry.TimeSheetDate + '", with a duration of "' + oRecordEntry.TimeSheetDataFields_RecordedHours + '" hours. ';
                            messageLogs.push(messagelog);
                            resolve(data);
                        }
                    }.bind(this),
                    error: function (error) {
                        savecount = savecount + 1;
                        var errorLog = JSON.parse(error.responseText);
                        var messagelog = {};
                        messagelog.Status = 'E';
                        messagelog.RecordedHours = oRecordEntry.TimeSheetDataFields_RecordedHours;
                        messagelog.Taskid = oRecordEntry.TimeSheetDataFields_TimeSheetTaskType;
                        messagelog.Wbselement = oRecordEntry.TimeSheetDataFields_WBSElement;
                        messagelog.TimeSheetDate = oRecordEntry.TimeSheetDate;
                        messagelog.Message = errorLog.error.message.value;
                        messageLogs.push(messagelog);
                        reject(error);
                    }.bind(this)
                });
            });
        },
        _logmessage: function () {
            messagaoDialog = this.byId("dialogmessageboxcreate");
            if (!messagaoDialog) {
                messagaoDialog = new sap.ui.xmlfragment(this.getView().getId(), "timesheetentry.view.MessageBox", this);
                this.getView().addDependent(messagaoDialog);
                messagaoDialog.open();
            } else {
                messagaoDialog.open();
            }
        },
        onmessageboxCloseDialog: function () {
            var that = this;
            sap.ui.getCore().getMessageManager().removeAllMessages();
            savecount = 0;
            addEntriesLength = 0;
            messageLogs = [];
            messageLogModel.setData(messageLogs);
            this.getView().setModel(messageLogModel, "CreateMessageData");
            messageLogModel.refresh(true);
            addDefaultEntries = [];
            oAddEntryModel.setData(addDefaultEntries);
            that.getView().setModel(oAddEntryModel, "Entries");
            oAddEntryModel.refresh(true);
            TemplateId = '';
            TemplateDesc = '';
            this.byId("dialogmessageboxcreate").close();
            oBusyDialogAdd.close();
            this.getView().byId("id_dialogaddentries").close();
        },
        /*Delete single*/
        ondeleterow: function (oEvent) {
            var oBusyDialogDeleteEntry = new sap.m.BusyDialog({
                title: "Processing Deletion of Record",
                text: "Please wait....."
            });
            oBusyDialogDeleteEntry.open();
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var TimesheetData = {};
            var oModelDelete = this.getOwnerComponent().getModel('TimesheetDeleteService');
            var oemployeeExtId = this.getView().byId("id_employee_extid");
            var ogetData = oEvent.getSource().getParent();
            var oCells = ogetData.getCells();
            var oPersonWorkAgreementExternalID = oemployeeExtId.getText();
            var oPersonWorkAgreement = oEmployeeInternalId;
            var oTimeSheetDate = oCells[0].getValue();
            var oTimeSheetRecord = oCells[9].getText();
            var oTimeSheetTaskType = oCells[12].getText();
            var oTimeSheetTaskComponent = oCells[10].getText();
            var oTimeSheetTaskLevel = oCells[13].getText();
            var oReceiverCostCenter = oCells[11].getText();
            var oRecordedHours = oCells[5].getText();
            var oRecordedQuantity = oCells[5].getText();
            var oControllingArea = oCells[14].getText();
            var oCompanyCode = oCells[15].getText();
            var oWbsElement = oCells[16].getText();
            TimesheetData.PersonWorkAgreementExternalID = oPersonWorkAgreementExternalID;
            TimesheetData.PersonWorkAgreement = oPersonWorkAgreement;
            var TimesheetDate = new Date(oTimeSheetDate);
            var DateTimesheetValue = oDateFormat.format(TimesheetDate);
            TimesheetData.TimeSheetDate = DateTimesheetValue + 'T00:00:00';
            TimesheetData.TimeSheetRecord = oTimeSheetRecord;
            TimesheetData.CompanyCode = oCompanyCode;
            TimesheetData.TimeSheetOperation = 'D';
            TimesheetData.TimeSheetIsReleasedOnSave = true;
            TimesheetData.TimeSheetIsExecutedInTestRun = false;
            TimesheetData.TimeSheetDataFields_TimeSheetTaskType = oTimeSheetTaskType;
            TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = oTimeSheetTaskComponent;
            TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = oTimeSheetTaskLevel;
            TimesheetData.TimeSheetDataFields_ReceiverCostCenter = oReceiverCostCenter;
            TimesheetData.TimeSheetDataFields_RecordedHours = oRecordedHours;
            TimesheetData.TimeSheetDataFields_RecordedQuantity = oRecordedQuantity;
            TimesheetData.TimeSheetDataFields_ControllingArea = oControllingArea;
            TimesheetData.TimeSheetDataFields_WBSElement = oWbsElement;
            TimesheetData.TimeSheetDataFields_HoursUnitOfMeasure = 'H';
            oModelDelete.create("/MyTimesheetDelete", TimesheetData, {
                success: function (data, response) {
                    if (response.statusCode == '201') {
                        this.oLogMessageDeleteDialog = new Dialog({
                            type: DialogType.Message,
                            title: "Information",
                            state: ValueState.Information,
                            content: new Text({ text: '"' + oTimeSheetRecord + '"' + ' ' + 'Record deleted Successfully.' }),
                            beginButton: new Button({
                                type: ButtonType.Emphasized,
                                text: "Ok",
                                press: function () {
                                    TemplateId = '';
                                    TemplateDesc = '';
                                    this.oLogMessageDeleteDialog.close();
                                    oBusyDialogDeleteEntry.close();
                                    this._bindtimesheet(oPersonWorkAgreementExternalID, DateValue1, DateValue2);
                                }.bind(this)
                            })
                        });
                        this.oLogMessageDeleteDialog.open();
                    }
                }.bind(this),
                error: function (error) {
                    var errorLog = JSON.parse(error.responseText);
                    this.oLogMessageDeleteDialogerror = new Dialog({
                        type: DialogType.Message,
                        title: "Information",
                        state: ValueState.Information,
                        content: new Text({ text: '"' + errorLog.error.message.value + '"' }),
                        beginButton: new Button({
                            type: ButtonType.Emphasized,
                            text: "Ok",
                            press: function () {
                                TemplateId = '';
                                TemplateDesc = '';
                                this.oLogMessageDeleteDialogerror.close();
                                oBusyDialogDeleteEntry.close();
                            }.bind(this)
                        })
                    });
                    this.oLogMessageDeleteDialogerror.open();
                }.bind(this)
            });
        },
        /*Delete Selected Records*/
        ondelete: async function (oEvent) {
            oBusyDialogDeleteAll = new sap.m.BusyDialog({
                title: "Processing Deletion of Records",
                text: "Please wait....."
            });
            oBusyDialogDeleteAll.open();
            var oModelDeleteAll = this.getOwnerComponent().getModel('TimesheetDeleteService');
            var oRecordEntries = [];
            var that = this;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oemployeeExtId = this.getView().byId("id_employee_extid");
            var oTablesearch = this.getView().byId("daysTable");
            var oSelectedItem = oTablesearch.getSelectedItems();
            if (oSelectedItem) {
                for (var i = 0; i < oSelectedItem.length; i++) {
                    var TimesheetData = {};
                    var oContext = oSelectedItem[i].getCells();
                    TimesheetData.PersonWorkAgreementExternalID = oemployeeExtId.getText();
                    TimesheetData.PersonWorkAgreement = oEmployeeInternalId;
                    var TimesheetDate = new Date(oContext[0].getValue());
                    var DateTimesheetValue = oDateFormat.format(TimesheetDate);
                    TimesheetData.TimeSheetDate = DateTimesheetValue + 'T00:00:00';
                    TimesheetData.TimeSheetRecord = oContext[9].getText();
                    TimesheetData.CompanyCode = oContext[15].getText();
                    TimesheetData.TimeSheetOperation = 'D';
                    TimesheetData.TimeSheetIsReleasedOnSave = true;
                    TimesheetData.TimeSheetIsExecutedInTestRun = false;
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskType = oContext[12].getText();
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = oContext[10].getText();
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = oContext[13].getText();
                    TimesheetData.TimeSheetDataFields_ReceiverCostCenter = oContext[11].getText();
                    TimesheetData.TimeSheetDataFields_RecordedHours = oContext[5].getText();
                    TimesheetData.TimeSheetDataFields_RecordedQuantity = oContext[5].getText();
                    TimesheetData.TimeSheetDataFields_ControllingArea = oContext[14].getText();
                    TimesheetData.TimeSheetDataFields_WBSElement = oContext[16].getText();
                    TimesheetData.TimeSheetDataFields_HoursUnitOfMeasure = 'H';
                    oRecordEntries[i] = TimesheetData;
                    let result = await that._deleteallrecords(oModelDeleteAll, oRecordEntries[i]);

                }
                that._logmessageError();
            }
        },
        _deleteallrecords: function (oModelEntry, oRecordEntry) {
            return new Promise((resolve, reject) => {
                oModelEntry.create("/MyTimesheetDelete", oRecordEntry, {
                    success: function (data, response) {
                        if (response.statusCode == '201') {
                            resolve(response);
                        }
                    }.bind(this),
                    error: function (error) {
                        var errorLog = JSON.parse(error.responseText);
                        reject(errorLog);
                    }.bind(this)
                });
            });
        },
        _logmessageError: function () {
            var that = this;
            var oemployeeExtId = this.getView().byId("id_employee_extid");
            var oemployeeExtIdVal = oemployeeExtId.getText();
            this.oLogMessagedeleteAllDialog = new Dialog({
                type: DialogType.Message,
                title: "Information",
                state: ValueState.Information,
                content: new Text({ text: "Entries Processed for Deletion" }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "Ok",
                    press: function () {
                        deletecount = 0;
                        TemplateId = '';
                        TemplateDesc = '';
                        this.oLogMessagedeleteAllDialog.close();
                        oBusyDialogDeleteAll.close();
                        that._bindtimesheet(oemployeeExtIdVal, DateValue1, DateValue2);
                    }.bind(this)
                })
            });
            this.oLogMessagedeleteAllDialog.open();
        },
        onsaveDialog: async function (oEvent) {
            var that;
            that = this;
            var oViewPage = that.getView();
            oBusyDialogAdd = new sap.m.BusyDialog({
                title: "Saving",
                text: "Please wait....."
            });
            oBusyDialogAdd.open();
            var oListData = [];
            var oRecordEntries = [];
            var oMsgButton = this.byId("id_alert");
            var oMessageManager = sap.ui.getCore().getMessageManager();
            oViewPage.setModel(oMessageManager.getMessageModel(), "message");
            sap.ui.getCore().getMessageManager().removeAllMessages();
            var oEmpExtValueadd = this.byId("id_add_employee_extid");
            var oEmpWrkId = this.byId("id_add_wrkid");
            var oCodeId = this.byId("id_add_ccode");
            var oCostC = this.byId("id_add_ccenter");
            var RecordTable = this.getView().byId("tableId1");
            var newEntries = RecordTable.getBinding("items");
            oListData = newEntries.oList;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oCheck = this._entriesValidations(oListData);
            if (oCheck === false) {
                for (let i = 0; i < oListData.length; i++) {
                    if ((oListData[i].TimesheetDate == null || oListData[i].TimesheetDate == '') &&
                        (oListData[i].RecordedHours == null || oListData[i].RecordedHours == '' || oListData[i].RecordedHours == '0') &&
                        ((oListData[i].TaskType == null && oListData[i].WBSElemt == null) || (oListData[i].TaskType == '' && oListData[i].WBSElemt == ''))
                    ) {
                        continue;
                    } else {
                        var TimesheetData = {};
                        var oWbsActivity = [];
                        TimesheetData.PersonWorkAgreementExternalID = oEmpExtValueadd.getText();
                        TimesheetData.PersonWorkAgreement = oEmployeeInternalId;
                        var startdate = oDateFormat.format(oListData[i].TimesheetDate);
                        TimesheetData.TimeSheetDate = startdate + 'T00:00:00';
                        TimesheetData.TimeSheetStatus = '10';
                        TimesheetData.TimeSheetOperation = 'C';
                        TimesheetData.CompanyCode = this.getView().byId("id_add_ccode").getSelectedKey();
                        TimesheetData.TimeSheetIsExecutedInTestRun = false;
                        TimesheetData.TimeSheetIsReleasedOnSave = false;
                        TimesheetData.TimeSheetDataFields_RecordedHours = oListData[i].RecordedHours;
                        TimesheetData.TimeSheetDataFields_RecordedQuantity = oListData[i].RecordedHours;
                        if (oListData[i].WBSElemt) {
                            oWbsActivity = oListData[i].WBSElemt.split("-");
                            TimesheetData.TimeSheetDataFields_WBSElement = oWbsActivity[0];
                            TimesheetData.TimeSheetDataFields_ActivityType = oWbsActivity[1];
                        }
                        TimesheetData.TimeSheetDataFields_TimeSheetTaskType = oListData[i].TaskType;
                        TimesheetData.TimeSheetDataFields_ReceiverPubSecFuncnlArea = 'YB40';
                        TimesheetData.TimeSheetDataFields_HoursUnitOfMeasure = 'H';
                        if (oListData[i].TaskType) {
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = 'WORK';
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = 'NONE';
                        } else {
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = '';
                            TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = '';
                        }

                        oRecordEntries[i] = TimesheetData;
                        try {
                            let result = await that._postEntries(oTimesheetModel, oRecordEntries[i], i, addEntriesLength);
                        } catch (error) {
                            continue;
                        }
                        
                    }
                }
                messageLogModel.setData(messageLogs);
                that.getView().setModel(messageLogModel, "CreateMessageData");
                messageLogModel.refresh(true);
                that._logmessage();
            } else {
                var oMessage = new Message({
                    message: "Fill all the details- Employee External Id,Person Worker Agreement ID,Company Code,Task Type/WBS Element, Recorded Hours",
                    type: MessageType.Error,
                    target: "/Dummy",
                    processor: this.getView().getModel()
                });
                oMsgButton.setIcon("sap-icon://error");
                oMsgButton.setType("Reject");
                sap.ui.getCore().getMessageManager().addMessages(oMessage);
                oBusyDialogAdd.close();
            }
        },
        downloadButton: function () {
            var aCols, oRowBinding, oSettings, oSheet, oTable;
            if (!this._oTable) {
                this._oTable = this.byId('iddialogmessageboxTable');
            }
            oTable = this._oTable;
            oRowBinding = oTable.getBinding('items');
            aCols = this._createColumnConfig();

            oSettings = {
                workbook: {
                    columns: aCols,
                    hierarchyLevel: 'Level'
                },
                dataSource: oRowBinding,
                fileName: 'Timesheet Entry logs.xlsx'
            };

            oSheet = new Spreadsheet(oSettings);
            oSheet.build().finally(function () {
                oSheet.destroy();
            });
        },
        _createColumnConfig: function () {
            var aCols = [];

            aCols.push({
                label: 'Status',
                type: EdmType.String,
                property: 'Status'
            });

            aCols.push({
                label: 'Recorded Hours',
                property: 'TimeSheetDate',
                type: EdmType.String
            });

            aCols.push({
                label: 'Task Id',
                property: 'Taskid',
                type: EdmType.String
            });

            aCols.push({
                label: 'WBS Element',
                property: 'Wbselement',
                type: EdmType.String
            });

            aCols.push({
                label: 'Recorded Hours',
                property: 'RecordedHours',
                type: EdmType.Number,
                scale: 5
            });

            aCols.push({
                label: 'Message',
                property: 'Message',
                type: EdmType.String
            });

            return aCols;
        },
        onMessagePopoverPress: function (oEvent) {
            var oSourceControl = oEvent.getSource();
            this._getMessagePopover().then(function (oMessagePopover) {
                oMessagePopover.openBy(oSourceControl);
            });
        },
        _getMessagePopover: function () {
            var oViewPage = this.getView();
            if (!this._pMessagePopover) {
                this._pMessagePopover = Fragment.load({
                    id: oViewPage.getId(),
                    name: "timesheetentry.view.MessageManager"
                }).then(function (oMessagePopover) {
                    oViewPage.addDependent(oMessagePopover);
                    return oMessagePopover;
                });
            }
            return this._pMessagePopover;
        },
        onupdatesubmit: async function () {
            oBusyDialogDeleteAll = new sap.m.BusyDialog({
                title: "Processing Submission of Records",
                text: "Please wait....."
            });
            oBusyDialogDeleteAll.open();
            var oModelDeleteAll = this.getOwnerComponent().getModel();
            oModelDeleteAll.setUseBatch(true);
            var oRecordEntries = [];
            var that = this;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oemployeeExtId = this.getView().byId("id_employee_extid");
            var oemployeeWorkId = this.getView().byId("id_wrkid_add");
            var oTablesearch = this.getView().byId("daysTable");
            var oSelectedItem = oTablesearch.getSelectedItems();
            if (oSelectedItem) {
                for (var i = 0; i < oSelectedItem.length; i++) {
                    var TimesheetData = {};
                    var oContext = oSelectedItem[i].getCells();
                    TimesheetData.PersonWorkAgreementExternalID = oemployeeExtId.getText();
                    TimesheetData.PersonWorkAgreement = oEmployeeInternalId;
                    var TimesheetDate = new Date(oContext[0].getValue());
                    var DateTimesheetValue = oDateFormat.format(TimesheetDate);
                    TimesheetData.TimeSheetDate = DateTimesheetValue + 'T00:00:00';
                    TimesheetData.TimeSheetRecord = oContext[9].getText();
                    TimesheetData.CompanyCode = oContext[15].getText();
                    TimesheetData.TimeSheetOperation = 'U';
                    TimesheetData.TimeSheetStatus = '30';
                    TimesheetData.TimeSheetIsReleasedOnSave = true;
                    TimesheetData.TimeSheetIsExecutedInTestRun = false;
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskType = oContext[12].getText();
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskComponent = oContext[10].getText();
                    TimesheetData.TimeSheetDataFields_TimeSheetTaskLevel = oContext[13].getText();
                    TimesheetData.TimeSheetDataFields_ReceiverCostCenter = oContext[11].getText();
                    TimesheetData.TimeSheetDataFields_RecordedHours = oContext[5].getText();
                    TimesheetData.TimeSheetDataFields_RecordedQuantity = oContext[5].getText();
                    TimesheetData.TimeSheetDataFields_ControllingArea = oContext[14].getText();
                    TimesheetData.TimeSheetDataFields_WBSElement = oContext[16].getText();
                    TimesheetData.TimeSheetDataFields_HoursUnitOfMeasure = 'H';
                    oRecordEntries[i] = TimesheetData;
                    try {
                        let result = await that._deleteallrecords(oModelDeleteAll, oRecordEntries[i]);
                    } catch (error) {
                        continue;
                    }
                    
                }
                that._logmessageError();
            }
        },
        templateChange: async function (oEvent) {
            var oValidatedComboBox = oEvent.getSource(),
                sSelectedKey = oValidatedComboBox.getSelectedKey(),
                oFilter = [],
                that = this,
                oEmployeeId = this.byId("id_add_employee_extid").getText(),
                oPreviousModel = this.getOwnerComponent().getModel("TimesheetPreviousService"),
                oTemplateModel = this.getOwnerComponent().getModel("SavetemplateService"),
                filterUser = new sap.ui.model.Filter("PersonWorkAgreementExternalID", "EQ", oEmployeeId);
            oFilter.push(filterUser);
            if (sSelectedKey == '1') {
                TemplateId = '';
                TemplateDesc = '';
                oBusyDialogPrevious = new sap.m.BusyDialog({
                    title: "loading Previous Timecard",
                    text: "Please wait....."
                });
                oBusyDialogPrevious.open();
                var oPreviousdate = new Date(new Date().getTime() - 604800000);
                that._getdates(oPreviousdate);
                if (oFromDate && oToDate) {
                    var oDateRange = oFromDate + 'T00:00:00Z';
                    var oDateRangeto = oToDate + 'T23:59:59Z';
                    var CreatedAtFilter = new sap.ui.model.Filter("TimeSheetDate", "BT", oDateRange, oDateRangeto);
                    oFilter.push(CreatedAtFilter);
                }
                let result = await that._getpreviousdata(oPreviousModel, oFilter);
                if (result.length > 0) {
                    var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                        pattern: "yyyy-MM-dd"
                    });
                    var oDateModelRead = this.getView().getModel("DateModel1").getProperty('/');
                    var ostartDate = oDateFormat.format(oDateModelRead.start);
                    var oCurrentdate = new Date(ostartDate);
                    oAddEntryModel = new sap.ui.model.json.JSONModel();
                    that._getdates(oCurrentdate);
                    let dateJsonData = that._getDateRange(oFromDate, oToDate);
                    if (dateJsonData) {
                        console.log(dateJsonData);
                        addDefaultEntries = [];
                        for (i = 0; i < result.length; i++) {
                            console.log(new Date(result[i].TimeSheetDate));
                            let filteredDates = dateJsonData.filter(function (item) {
                                return item.Day === new Date(result[i].TimeSheetDate).getDay();
                            });
                            console.log(filteredDates[0].Date);
                            var addDefaultEntry = {};
                            addDefaultEntry.Id = i;
                            addDefaultEntry.TimesheetDate = filteredDates[0].Date;
                            addDefaultEntry.TaskType = result[i].TimeSheetTaskType;
                            addDefaultEntry.WBSElemt = '';
                            addDefaultEntry.RecordedHours = result[i].RecordedHours;
                            addDefaultEntry.RecordedQuantity = result[i].RecordedHours;
                            addDefaultEntries.push(addDefaultEntry);
                        }
                        addDefaultEntries.sort(function (a, b) {
                            var dateA = new Date(a.TimesheetDate);
                            var dateB = new Date(b.TimesheetDate);
                            return dateA - dateB;
                        });
                        oAddEntryModel.setData(addDefaultEntries);
                        that.getView().setModel(oAddEntryModel, "Entries");
                        oAddEntryModel.refresh(true);
                        oBusyDialogPrevious.close();
                        this.getView().byId("id_add_entrysave").setEnabled(true);
                        this.getView().byId("id_add_entry_submit").setEnabled(true);
                        this.getView().byId("id_add_entrytemplate").setEnabled(true);
                    }
                }
            } else if (sSelectedKey == '2') {
                oBusyDialogTemplate = new sap.m.BusyDialog({
                    title: "Loading Data",
                    text: "Please wait....."
                });
                oBusyDialogTemplate.open();
                var oExternalId = this.getView().byId("id_employee_extid").getText(),
                    oView = this.getView();
                let oGetTemplates = await that._getTemplates(oTemplateModel, oExternalId);
                if (oGetTemplates) {
                    GetTemplatesModel.setData(oGetTemplates);
                    GetTemplatesModel.refresh();
                    that.getView().setModel(GetTemplatesModel, "AllTemplates");
                    if (!this._pValueHelpDialog) {
                        this._pValueHelpDialog = Fragment.load({
                            id: oView.getId(),
                            name: "timesheetentry.view.GetTemplates",
                            controller: this
                        }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            return oDialog;
                        });
                    }
                    this._pValueHelpDialog.then(function (oDialog) {
                        // Create a filter for the binding
                        oBusyDialogTemplate.close();
                        oDialog.open();

                    });
                } else {
                    GetTemplatesModel.setData(oGetTemplates);
                    GetTemplatesModel.refresh();
                    that.getView().setModel(GetTemplatesModel, "AllTemplates");
                    if (!this._pValueHelpDialog) {
                        this._pValueHelpDialog = Fragment.load({
                            id: oView.getId(),
                            name: "timesheetentry.view.GetTemplates",
                            controller: this
                        }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            return oDialog;
                        });
                    }
                    this._pValueHelpDialog.then(function (oDialog) {
                        oBusyDialogTemplate.close();
                        oDialog.open();
                    });
                }
                this.getView().byId("id_add_entrysave").setEnabled(true);
                this.getView().byId("id_add_entry_submit").setEnabled(true);
                this.getView().byId("id_add_entrytemplate").setEnabled(true);
            } else {
                var that = this;
                oAddEntryModel = new sap.ui.model.json.JSONModel();
                TemplateId = '';
                TemplateDesc = '';
                addDefaultEntries = [];
                for (i = 0; i <= 4; i++) {
                    var addDefaultEntry = {};
                    addDefaultEntry.Id = i;
                    addDefaultEntry.TimesheetDate = '';
                    addDefaultEntry.TaskType = '';
                    addDefaultEntry.WBSElemt = '';
                    addDefaultEntry.RecordedHours = '0';
                    addDefaultEntry.RecordedQuantity = '0';
                    addDefaultEntries.push(addDefaultEntry);
                }
                oAddEntryModel.setData(addDefaultEntries);
                that.getView().setModel(oAddEntryModel, "Entries");
                oAddEntryModel.refresh(true);
                this.getView().byId("id_add_entrysave").setEnabled(false);
                this.getView().byId("id_add_entry_submit").setEnabled(false);
            }
        },
        _getpreviousdata: async function (oModelEntry, oFilter) {
            return new Promise((resolve, reject) => {
                oModelEntry.read("/MyTimesheetPreviousDetails", {
                    filters: oFilter,
                    urlParameters: { "$top": 999999 },
                    success: function (response) {
                        console.log(response.results);
                        resolve(response.results);
                    }.bind(this),
                    error: function (error) {
                        console.log(error);
                    }.bind(this)
                });
            });
        },
        _getdates: function (oDate) {
            var ostartDate = new Date(oDate);
            var ostartDay = ostartDate.getDay();
            var sFromDate, sToDate;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            if (ostartDay === 6) {
                sFromDate = ostartDate;
                sToDate = new Date(new Date(ostartDate).getTime() + 518400000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 5) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 518400000);
                sToDate = ostartDate;
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 4) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 432000000);
                sToDate = new Date(new Date(ostartDate).getTime() + 86400000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 3) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 345600000);
                sToDate = new Date(new Date(ostartDate).getTime() + 172800000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 2) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 259200000);
                sToDate = new Date(new Date(ostartDate).getTime() + 259200000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 1) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 172800000);
                sToDate = new Date(new Date(ostartDate).getTime() + 345600000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            } else if (ostartDay === 0) {
                sFromDate = new Date(new Date(ostartDate).getTime() - 86400000);
                sToDate = new Date(new Date(ostartDate).getTime() + 432000000);
                oFromDate = oDateFormat.format(sFromDate);
                oToDate = oDateFormat.format(sToDate);
            }
        },
        _getDateRange: function (oFrom, oTodata) {
            var next = 0,
                datesArray = [],
                newDate;
            var dates = {};
            dates.Date = new Date(oFrom);
            dates.Day = new Date(oFrom).getDay();
            datesArray.push(dates);
            do {
                let dates = {};
                if (next == 0) {
                    newDate = new Date(new Date(oFrom).getTime() + 86400000);
                } else {
                    newDate = new Date(newDate.getTime() + 86400000);
                }
                dates.Date = newDate;
                dates.Day = newDate.getDay();
                datesArray.push(dates);
                next++;
            } while (next < 5);

            var dates = {};
            dates.Date = new Date(oTodata);
            dates.Day = new Date(oTodata).getDay();
            datesArray.push(dates)
            return datesArray;
        },
        ontemplateDialog: async function () {
            var oDialogTemplate = this.byId("id_dialogtemplateentries");
            if (!oDialogTemplate) {
                oDialogTemplate = new sap.ui.xmlfragment(this.getView().getId(), "timesheetentry.view.SaveTemplate", this);
                this.getView().addDependent(oDialogTemplate);
                if (TemplateId) {
                    this.getView().byId('id_templateid_save').setValue(TemplateId);
                    this.getView().byId('id_templateid_save').setEditable(false);
                    this.getView().byId('id_template_submit').setVisible(false);
                    this.getView().byId('id_template_update').setVisible(true);
                } else {
                    this.getView().byId('id_templateid_save').setValue('');
                    this.getView().byId('id_templateid_save').setEditable(true);
                    this.getView().byId('id_template_submit').setVisible(true);
                    this.getView().byId('id_template_update').setVisible(false);
                }
                if (TemplateDesc) {
                    this.getView().byId('id_templatedesc_save').setValue(TemplateDesc);
                } else {
                    this.getView().byId('id_templatedesc_save').setValue('');
                }
                oDialogTemplate.open();
            } else {
                if (TemplateId) {
                    this.getView().byId('id_templateid_save').setValue(TemplateId);
                    this.getView().byId('id_templateid_save').setEditable(false);
                    this.getView().byId('id_template_submit').setVisible(false);
                    this.getView().byId('id_template_update').setVisible(true);
                } else {
                    this.getView().byId('id_templateid_save').setValue('');
                    this.getView().byId('id_templateid_save').setEditable(true);
                    this.getView().byId('id_template_submit').setVisible(true);
                    this.getView().byId('id_template_update').setVisible(false);
                }
                if (TemplateDesc) {
                    this.getView().byId('id_templatedesc_save').setValue(TemplateDesc);
                } else {
                    this.getView().byId('id_templatedesc_save').setValue('');
                }
                oDialogTemplate.open();
            }
        },
        _saveTemplate: function (oModel, entries) {
            return new Promise((resolve, reject) => {
                oModel.create("/SaveTemplate", { entries }, {
                    success: function (data, response) {
                        if (response.statusCode == '200') {
                            resolve(response);
                        } else {
                            resolve(response);
                        }
                    }.bind(this),
                    error: function (error) {
                        var errorLog = JSON.parse(error.responseText);
                        reject(errorLog);
                    }.bind(this)
                });
            });
        },
        _updateTemplate: function (oModel, entries) {
            return new Promise((resolve, reject) => {
                oModel.create("/UpdateTemplate", { entries }, {
                    success: function (data, response) {
                        if (response.statusCode == '200') {
                            resolve(response);
                        } else {
                            resolve(response);
                        }
                    }.bind(this),
                    error: function (error) {
                        var errorLog = JSON.parse(error.responseText);
                        reject(errorLog);
                    }.bind(this)
                });
            });
        },
        _getTemplates: function (oModel, oExternalId) {
            return new Promise((resolve, reject) => {
                oModel.callFunction("/GetTemplates", {
                    method: "GET",
                    urlParameters: { "EmployeeExternalId": oExternalId },
                    success: function (oData) {
                        var aTemplates = oData.results;
                        console.log(aTemplates);
                        if (aTemplates.length > 0) {
                            resolve(aTemplates);
                        } else {
                            resolve(aTemplates);
                        }
                    },
                    error: function (oError) {
                        reject(oError);
                    }
                });
            });
        },
        ongettemplateSearch: function (oEvent) {
            var sValue = oEvent.getParameter("value");
            var oFilter = new Filter("TemplateDescription", FilterOperator.Contains, sValue);
            var oBinding = oEvent.getParameter("itemsBinding");
            oBinding.filter([oFilter]);
        },
        ongettemplateClose: async function (oEvent) {
            var oTemplateModel = this.getOwnerComponent().getModel("SavetemplateService"),
                that = this,
                oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                    pattern: "yyyy-MM-dd"
                }),
                oDateModelRead = this.getView().getModel("DateModel1").getProperty('/'),
                ostartDate = oDateFormat.format(oDateModelRead.start),
                oCurrentdate = new Date(ostartDate),
                oSelectedItem = oEvent.getSource(),
                oItem = oSelectedItem.getCells()[0].getTitle();
            TemplateId = oSelectedItem.getCells()[0].getTitle();
            TemplateDesc = oSelectedItem.getCells()[1].getText();

            var oBusyDialogTempl = new sap.m.BusyDialog({
                title: "Loading Data",
                text: "Please wait....."
            });
            oBusyDialogTempl.open();
            if (oSelectedItem) {
                var oValue = oSelectedItem.getCells()[0].getTitle();
                var oTemplateData = await that._getTemplate(oTemplateModel, oValue);
                if (oTemplateData.length > 0) {
                    oAddEntryModel = new sap.ui.model.json.JSONModel();
                    that._getdates(oCurrentdate);
                    let dateJsonData = that._getDateRange(oFromDate, oToDate);
                    addDefaultEntries = [];
                    for (i = 0; i < oTemplateData.length; i++) {
                        console.log(new Date(oTemplateData[i].Date));
                        let filteredDates = dateJsonData.filter(function (item) {
                            return item.Day === oTemplateData[i].Day;
                        });
                        console.log(filteredDates[0].Date);
                        var addDefaultEntry = {};
                        addDefaultEntry.Id = i;
                        addDefaultEntry.TimesheetDate = filteredDates[0].Date;
                        addDefaultEntry.TaskType = oTemplateData[i].TaskType;
                        addDefaultEntry.WBSElemt = oTemplateData[i].WBSElement;
                        addDefaultEntry.RecordedHours = oTemplateData[i].RecordedHours;
                        addDefaultEntry.RecordedQuantity = oTemplateData[i].RecordedHours;
                        addDefaultEntries.push(addDefaultEntry);
                    }
                    addDefaultEntries.sort(function (a, b) {
                        var dateA = new Date(a.TimesheetDate);
                        var dateB = new Date(b.TimesheetDate);
                        return dateA - dateB;
                    });
                    oAddEntryModel.setData(addDefaultEntries);
                    that.getView().setModel(oAddEntryModel, "Entries");
                    oAddEntryModel.refresh(true);
                    this.getView().byId("id_add_entrysave").setEnabled(true);
                    this.getView().byId("id_add_entry_submit").setEnabled(true);
                    this.getView().byId("id_add_entrytemplate").setEnabled(true);
                    oBusyDialogTempl.close();
                    this.getView().byId("id_dialogtemplateentrieslist").close();
                } else {
                    oBusyDialogTempl.close();
                    this.getView().byId("id_dialogtemplateentrieslist").close();
                }
            } else {
                oBusyDialogTempl.close();
                this.getView().byId("id_dialogtemplateentrieslist").close();
            }
        },
        _getTemplate: function (oModel, oTemplateId) {
            return new Promise((resolve, reject) => {
                oModel.callFunction("/GetTemplate", {
                    method: "GET",
                    urlParameters: { "TemplateId": oTemplateId },
                    success: function (oData) {
                        var aTemplate = oData.results;
                        console.log(aTemplate);
                        if (aTemplate.length > 0) {
                            resolve(aTemplate);
                        } else {
                            resolve(aTemplate);
                        }
                    },
                    error: function (oError) {
                        reject(oError);
                    }
                });
            });
        },
        ontemplatesaveDialog: async function () {
            var that;
            that = this;
            var oViewPage = that.getView();
            oTemplateModel = this.getOwnerComponent().getModel("SavetemplateService");
            oBusyDialogAdd = new sap.m.BusyDialog({
                title: "Saving Template",
                text: "Please wait....."
            });
            oBusyDialogAdd.open();
            var oListData = [];
            var oTemplateEntries = [];
            var oMsgButton = this.byId("id_alert");
            var oMessageManager = sap.ui.getCore().getMessageManager();
            oViewPage.setModel(oMessageManager.getMessageModel(), "message");
            sap.ui.getCore().getMessageManager().removeAllMessages();
            var oEmpExtValueadd = this.byId("id_add_employee_extid");
            var sTemplateId = this.getView().byId("id_templateid_save");
            var sTemplateDesc = this.getView().byId("id_templatedesc_save");
            var RecordTable = this.getView().byId("tableId1");
            var newEntries = RecordTable.getBinding("items");
            oListData = newEntries.oList;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oCheck = this._entriesValidations(oListData);
            if (oCheck === false) {
                for (let i = 0; i < oListData.length; i++) {
                    if ((oListData[i].TimesheetDate == null || oListData[i].TimesheetDate == '') &&
                        (oListData[i].RecordedHours == null || oListData[i].RecordedHours == '' || oListData[i].RecordedHours == '0') &&
                        ((oListData[i].TaskType == null && oListData[i].WBSElemt == null) || (oListData[i].TaskType == '' && oListData[i].WBSElemt == ''))
                    ) {
                        continue;
                    } else {
                        var TemplateData = {};
                        TemplateData.EmployeeExternalId = oEmpExtValueadd.getText();
                        TemplateData.TemplateId = sTemplateId.getValue();
                        TemplateData.TemplateDescription = sTemplateDesc.getValue();
                        var startdate = oDateFormat.format(oListData[i].TimesheetDate);
                        TemplateData.Date = startdate;
                        TemplateData.RecordedHours = oListData[i].RecordedHours;
                        TemplateData.WBSElement = oListData[i].WBSElemt;
                        TemplateData.TaskType = oListData[i].TaskType;
                        TemplateData.Day = new Date(startdate).getDay();
                        oTemplateEntries.push(TemplateData);
                    }
                }
                let result = await that._saveTemplate(oTemplateModel, oTemplateEntries);
                if (result) {
                    that._logmessageTemplate(result);
                }
            } else {
                var oMessage = new Message({
                    message: "Fill all the details- Employee External Id,Person Worker Agreement ID,Company Code,Task Type/WBS Element, Recorded Hours",
                    type: MessageType.Error,
                    target: "/Dummy",
                    processor: this.getView().getModel()
                });
                oMsgButton.setIcon("sap-icon://error");
                oMsgButton.setType("Reject");
                sap.ui.getCore().getMessageManager().addMessages(oMessage);
                oBusyDialogAdd.close();
            }
        },
        ontemplateupdateDialog: async function () {
            var that;
            that = this;
            var oViewPage = that.getView();
            oTemplateModel = this.getOwnerComponent().getModel("SavetemplateService");
            oBusyDialogAdd = new sap.m.BusyDialog({
                title: "Updating Template",
                text: "Please wait....."
            });
            oBusyDialogAdd.open();
            var oListData = [];
            var oTemplateEntries = [];
            var oMsgButton = this.byId("id_alert");
            var oMessageManager = sap.ui.getCore().getMessageManager();
            oViewPage.setModel(oMessageManager.getMessageModel(), "message");
            sap.ui.getCore().getMessageManager().removeAllMessages();
            var oEmpExtValueadd = this.byId("id_add_employee_extid");
            var sTemplateId = this.getView().byId("id_templateid_save");
            var sTemplateDesc = this.getView().byId("id_templatedesc_save");
            var RecordTable = this.getView().byId("tableId1");
            var newEntries = RecordTable.getBinding("items");
            oListData = newEntries.oList;
            var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
                pattern: "yyyy-MM-dd"
            });
            var oCheck = this._entriesValidations(oListData);
            if (oCheck === false) {
                for (let i = 0; i < oListData.length; i++) {
                    if ((oListData[i].TimesheetDate == null || oListData[i].TimesheetDate == '') &&
                        (oListData[i].RecordedHours == null || oListData[i].RecordedHours == '' || oListData[i].RecordedHours == '0') &&
                        ((oListData[i].TaskType == null && oListData[i].WBSElemt == null) || (oListData[i].TaskType == '' && oListData[i].WBSElemt == ''))
                    ) {
                        continue;
                    } else {
                        var TemplateData = {};
                        TemplateData.EmployeeExternalId = oEmpExtValueadd.getText();
                        TemplateData.TemplateId = sTemplateId.getValue();
                        TemplateData.TemplateDescription = sTemplateDesc.getValue();
                        var startdate = oDateFormat.format(oListData[i].TimesheetDate);
                        TemplateData.Date = startdate;
                        TemplateData.RecordedHours = oListData[i].RecordedHours;
                        TemplateData.WBSElement = oListData[i].WBSElemt;
                        TemplateData.TaskType = oListData[i].TaskType;
                        TemplateData.Day = new Date(startdate).getDay();
                        oTemplateEntries.push(TemplateData);
                    }
                }
                let result = await that._updateTemplate(oTemplateModel, oTemplateEntries);
                if (result) {
                    that._logmessageTemplate(result);
                }
            } else {
                var oMessage = new Message({
                    message: "Fill all the details- Employee External Id,Person Worker Agreement ID,Company Code,Task Type/WBS Element, Recorded Hours",
                    type: MessageType.Error,
                    target: "/Dummy",
                    processor: this.getView().getModel()
                });
                oMsgButton.setIcon("sap-icon://error");
                oMsgButton.setType("Reject");
                sap.ui.getCore().getMessageManager().addMessages(oMessage);
                oBusyDialogAdd.close();
            }
        },
        onCloseDialogtemplate: function () {
            this.getView().byId("id_dialogtemplateentries").close();
            this.getView().byId("id_templateid_save").setValue("");
            this.getView().byId("id_templatedesc_save").setValue("");
            TemplateId = '';
            TemplateDesc = '';
        },
        _logmessageTemplate: function (response) {
            var that = this;
            var message, state;
            var oTemplateId = this.getView().byId("id_templateid_save");
            var oTemplateVal = oTemplateId.getValue();
            if (response.statusCode == '200') {
                message = "Template-" + " " + oTemplateVal + " " + "Saved Successfully";
                state = ValueState.Information;
            } else {
                message = "Template-" + " " + oTemplateVal + " " + "failed to save";
                state = ValueState.Error;
            }
            this.oLogMessageTemplateDialog = new Dialog({
                type: DialogType.Message,
                title: "Information",
                state: state,
                content: new Text({ text: message }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "Ok",
                    press: function () {
                        this.oLogMessageTemplateDialog.close();
                        addDefaultEntries = [];
                        addEntriesLength = 0;
                        oAddEntryModel.setData(addDefaultEntries);
                        that.getView().setModel(oAddEntryModel, "Entries");
                        oAddEntryModel.refresh(true);
                        sap.ui.getCore().getMessageManager().removeAllMessages();
                        this.getView().byId("id_dialogaddentries").close();
                        this.getView().byId("id_add_entrysave").setEnabled(false);
                        this.getView().byId("id_add_entry_submit").setEnabled(false);
                        this.getView().byId("id_add_entrytemplate").setEnabled(false);
                        this.getView().byId("id_templatecombo").setSelectedKey("");
                        this.getView().byId("id_dialogtemplateentries").close();
                        this.getView().byId("id_templateid_save").setValue("");
                        this.getView().byId("id_templatedesc_save").setValue("");
                        TemplateId = '';
                        TemplateDesc = '';
                        oBusyDialogAdd.close();
                    }.bind(this)
                })
            });
            this.oLogMessageTemplateDialog.open();
        },
        deletetemplate: async function (oEvent) {
            oBusyDialogTemplateDelete = new sap.m.BusyDialog({
                title: "Delete Template",
                text: "Please wait....."
            });
            oBusyDialogTemplateDelete.open();
            var oemployeeExtId = this.getView().byId("id_add_employee_extid"),
                getRemoveIndex = oEvent.getParameter("listItem"),
                oCells = getRemoveIndex.getCells(),
                sId = oCells[0].getTitle(),
                oTemplateDeleteModel = this.getOwnerComponent().getModel("SavetemplateService"),
                that = this;
            var oDeletetemplateModel = [], deletetemplate = {};
            if (sId) {
                deletetemplate.TemplateId = sId;
                deletetemplate.EmployeeExternalId = oemployeeExtId.getText();
                oDeletetemplateModel.push(deletetemplate);
                let response = await that._deleteTemplate(oTemplateDeleteModel, oDeletetemplateModel);
                if (response) {
                    let oGetTemplates = await that._getTemplates(oTemplateDeleteModel, oemployeeExtId.getText());
                    if (oGetTemplates) {
                        GetTemplatesModel.setData(oGetTemplates);
                        GetTemplatesModel.refresh();
                        that.getView().setModel(GetTemplatesModel, "AllTemplates");
                    }
                    that._logmessageDeleteTemplate(response);
                }
            } else {
                oBusyDialogTemplateDelete.close();
            }
        },
        _deleteTemplate: async function (oModel, entries) {
            return new Promise((resolve, reject) => {
                oModel.create("/DeleteTemplate", { entries }, {
                    success: function (data, response) {
                        if (response.statusCode == '200') {
                            resolve({ Id: entries[0].TemplateId, message: 'Template Success deleted', status: '200' });
                        } else {
                            resolve({ Id: entries[0].TemplateId, message: 'Template Success deleted', status: '200' });
                        }
                    }.bind(this),
                    error: function (error) {
                        var errorLog = JSON.parse(error.responseText);
                        reject({ Id: entries[0].TemplateId, message: errorLog, status: '500' });
                    }.bind(this)
                });
            });
        },
        _logmessageDeleteTemplate: async function (response) {
            var that = this;
            var message, state;
            var oTemplateVal = response.Id;
            if (response.status == '200') {
                message = "Template-" + " " + oTemplateVal + " " + "Deleted Successfully";
                state = ValueState.Information;
            } else {
                message = "Template-" + " " + oTemplateVal + " " + "failed to delete";
                state = ValueState.Error;
            }
            this.oLogMessageTemplatedeleteDialog = new Dialog({
                type: DialogType.Message,
                title: "Information",
                state: state,
                content: new Text({ text: message }),
                beginButton: new Button({
                    type: ButtonType.Emphasized,
                    text: "Ok",
                    press: function async() {
                        this.oLogMessageTemplatedeleteDialog.close();
                        oBusyDialogTemplateDelete.close();
                    }.bind(this)
                })
            });
            this.oLogMessageTemplatedeleteDialog.open();
        },
        ontemplateclose: function () {
            this.getView().byId("id_dialogtemplateentrieslist").close();
            this.getView().byId("id_templatecombo").setSelectedKey('');
        },
        onfieldSetting: function () {
            var oDialogSetting = this.byId("id_dialogsettings");
            if (!oDialogSetting) {
                oDialogSetting = new sap.ui.xmlfragment(this.getView().getId(), "timesheetentry.view.Settings", this);
                this.getView().addDependent(oDialogSetting);
                oDialogSetting.open();
            } else {
                oDialogSetting.open();
            }
        },
        onsettingok: function(){
            var SettingTable = this.getView().byId("tablesetting");
            var fieldData = SettingTable.getBinding("items"),
            ofieldList = fieldData.oList;
            if(ofieldList[1].Checked == true && ofieldList[2].Checked == true){
                MessageBox.error("Both Employee Wbs Element and Wbs Element cannot be checked!!");
            }else{
                if(ofieldList[0].Checked == true){
                    oFieldModel = this.getView().getModel("FieldProperty");
                    oFieldModel.setProperty("/bHideColumn", true);
                }else{
                    oFieldModel = this.getView().getModel("FieldProperty");
                    oFieldModel.setProperty("/bHideColumn", false);
                    oFieldModel.refresh();
                }
                if(ofieldList[1].Checked == true){
                    isAllWbsElement = '';
                    this.getView().byId("id_wbs_elmt").setText("Employee Wbs Element");
                }else if(ofieldList[2].Checked == true){
                    isAllWbsElement = 'X';
                    this.getView().byId("id_wbs_elmt").setText("Wbs Element");
                }else{
                    isAllWbsElement = 'X';
                    this.getView().byId("id_wbs_elmt").setText("Wbs Element");
                }
                this.getView().byId("id_dialogsettings").close();
            }
           
        },
        onsettingClose: function(){
            this.getView().byId("id_dialogsettings").close();
        },
        onExit: function (){
            var oAddEntryDialog = this.getView().byId("id_dialogaddentries");
            var oTemplateList = this.getView().byId("id_dialogtemplateentrieslist");
            var oDialogMessage = this.getView().byId("dialogmessageboxcreate");
            var oMessagepopover = this.getView().byId("id_msgpopover");
            var oTemplate = this.getView().byId("id_dialogtemplateentries");
            var oSettings = this.getView().byId("id_dialogsettings");

            if(oAddEntryDialog){
                oAddEntryDialog.destroy();
            }
            if(oTemplateList){
                oTemplateList.destroy();
            }
            if(oDialogMessage){
                oDialogMessage.destroy();
            }
            if(oMessagepopover){
                oMessagepopover.destroy();
            }
            if(oTemplate){
                oTemplate.destroy();
            }
            if(oSettings){
                oSettings.destroy();
            }
        }
    });
});