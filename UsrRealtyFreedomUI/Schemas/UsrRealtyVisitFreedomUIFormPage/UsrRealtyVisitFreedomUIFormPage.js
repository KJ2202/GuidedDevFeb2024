define("UsrRealtyVisitFreedomUIFormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "DateTimePicker_q1xa6pg",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrDateAndTime_a1xpoc3",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrDateAndTime_a1xpoc3"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_4qw6dt7",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_rxsykuk",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_rxsykuk",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_pl6cik8",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_pl6cik8_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_4qw6dt7",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_7nyoxow",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrComment_44tenpe",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrComment_44tenpe"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_1gromkq",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRealtyVisitFreedomUIDS_UsrManager_1l1ookb",
					"labelPosition": "above",
					"control": "$UsrRealtyVisitFreedomUIDS_UsrManager_1l1ookb",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_li5ow0r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_li5ow0r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_1gromkq",
				"propertyName": "listActions",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRealtyVisitFreedomUIDS_UsrDateAndTime_a1xpoc3": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrDateAndTime"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrPotentialCustomer_rxsykuk": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrPotentialCustomer"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrComment_44tenpe": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrComment"
						}
					},
					"UsrRealtyVisitFreedomUIDS_UsrManager_1l1ookb": {
						"modelConfig": {
							"path": "UsrRealtyVisitFreedomUIDS.UsrManager"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRealtyVisitFreedomUIDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRealtyVisitFreedomUI"
							}
						}
					},
					"primaryDataSourceName": "UsrRealtyVisitFreedomUIDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});