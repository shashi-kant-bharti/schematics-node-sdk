/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2026.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const SchematicsV1 = require('../dist/schematics/v1');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the schematics service.
//
// The following configuration properties are assumed to be defined:
// SCHEMATICS_URL=<service base url>
// SCHEMATICS_AUTH_TYPE=iam
// SCHEMATICS_APIKEY=<IAM apikey>
// SCHEMATICS_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'schematics_v1.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('SchematicsV1', () => {
  // Service instance
  let schematicsService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(SchematicsV1.DEFAULT_SERVICE_NAME);

  test('Initialize service', async () => {
    // begin-common

    schematicsService = SchematicsV1.newInstance();

    // end-common
  });

  test('listLocations request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listLocations() result:');
    // begin-list_locations

    let res;
    try {
      res = await schematicsService.listLocations({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_locations
  });

  test('listResourceGroup request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listResourceGroup() result:');
    // begin-list_resource_group

    let res;
    try {
      res = await schematicsService.listResourceGroup({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_resource_group
  });

  test('getSchematicsVersion request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getSchematicsVersion() result:');
    // begin-get_schematics_version

    let res;
    try {
      res = await schematicsService.getSchematicsVersion({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_schematics_version
  });

  test('processTemplateMetaData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('processTemplateMetaData() result:');
    // begin-ProcessTemplateMetaData

    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      computed_git_repo_url: 'https://github.com/IBM-Cloud/terraform-provider-ibm/tree/master/examples/ibm-vsi',
      git_repo_url: 'https://github.com/IBM-Cloud/terraform-provider-ibm',
      git_repo_folder: 'examples/ibm-vsi',
      git_release: 'v1.0.0',
      git_branch: 'master',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'git_hub',
      git: gitSourceModel,
    };

    const params = {
      templateType: 'terraform_v1_0',
      source: externalSourceModel,
    };

    let res;
    try {
      res = await schematicsService.processTemplateMetaData(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-ProcessTemplateMetaData
  });

  test('listWorkspaces request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listWorkspaces() result:');
    // begin-list_workspaces

    let res;
    try {
      res = await schematicsService.listWorkspaces({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_workspaces
  });

  test('createWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createWorkspace() result:');
    // begin-create_workspace

    // Request models needed by this operation.

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      name: 'region',
      type: 'string',
      value: 'us-south',
    };

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      type: 'terraform_v1.9',
      variablestore: [workspaceVariableRequestModel],
    };

    // TemplateRepoRequest
    const templateRepoRequestModel = {
      url: 'https://github.com/ptaube/tf_cloudless_sleepy',
    };

    const params = {
      description: 'Workspace to provision infrastructure',
      location: 'us-east',
      name: 'my-terraform-workspace',
      resourceGroup: 'Default',
      tags: ['env:dev', 'project:demo'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoRequestModel,
      type: ['terraform_v1.9'],
    };

    let res;
    try {
      res = await schematicsService.createWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_workspace
  });

  test('getWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspace() result:');
    // begin-get_workspace

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace
  });

  test('updateWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateWorkspace() result:');
    // begin-update_workspace

    // Request models needed by this operation.

    // WorkspaceStatusUpdateRequest
    const workspaceStatusUpdateRequestModel = {
      frozen: false,
    };

    const params = {
      wId: 'testString',
      description: 'Updated workspace description',
      name: 'my-workspace-updated',
      tags: ['env:production', 'team:devops'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
    };

    let res;
    try {
      res = await schematicsService.updateWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_workspace
  });

  test('replaceWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceWorkspace() result:');
    // begin-replace_workspace

    // Request models needed by this operation.

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'Description of sample_var',
      name: 'sample_var',
      secure: false,
      value: 'THIS IS IBM CLOUD TERRAFORM CLI DEMO',
    };

    // TemplateSourceDataRequest
    const templateSourceDataRequestModel = {
      folder: '.',
      type: 'terraform_v1.0',
      variablestore: [workspaceVariableRequestModel],
    };

    // TemplateRepoUpdateRequest
    const templateRepoUpdateRequestModel = {
      url: 'https://github.com/ptaube/tf_cloudless_sleepy',
    };

    // WorkspaceStatusUpdateRequest
    const workspaceStatusUpdateRequestModel = {
      frozen: true,
    };

    const params = {
      wId: 'testString',
      description: 'terraform workspace updated',
      name: 'testWorkspaceApi',
      tags: ['department:HR', 'application:compensation', 'environment:staging'],
      templateData: [templateSourceDataRequestModel],
      templateRepo: templateRepoUpdateRequestModel,
      type: ['terraform_v1.0'],
      workspaceStatus: workspaceStatusUpdateRequestModel,
    };

    let res;
    try {
      res = await schematicsService.replaceWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_workspace
  });

  test('getWorkspaceReadme request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceReadme() result:');
    // begin-get_workspace_readme

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceReadme(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_readme
  });

  test('templateRepoUpload request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('templateRepoUpload() result:');
    // begin-template_repo_upload

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.templateRepoUpload(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-template_repo_upload
  });

  test('getWorkspaceInputs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceInputs() result:');
    // begin-get_workspace_inputs

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceInputs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_inputs
  });

  test('replaceWorkspaceInputs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceWorkspaceInputs() result:');
    // begin-replace_workspace_inputs

    // Request models needed by this operation.

    // WorkspaceVariableRequest
    const workspaceVariableRequestModel = {
      description: 'IBM Cloud region',
      name: 'region',
      secure: false,
      type: 'string',
      value: 'us-south',
    };

    const params = {
      wId: 'testString',
      tId: 'testString',
      envValues: [{ name: 'env_variable_name', value: 'env_variable_value' }],
      values: 'string',
      variablestore: [workspaceVariableRequestModel],
    };

    let res;
    try {
      res = await schematicsService.replaceWorkspaceInputs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_workspace_inputs
  });

  test('getAllWorkspaceInputs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getAllWorkspaceInputs() result:');
    // begin-get_all_workspace_inputs

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getAllWorkspaceInputs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_all_workspace_inputs
  });

  test('getWorkspaceInputMetadataV2 request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceInputMetadataV2() result:');
    // begin-get_workspace_input_metadata_v2

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceInputMetadataV2(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_input_metadata_v2
  });

  test('getWorkspaceInputMetadata request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceInputMetadata() result:');
    // begin-get_workspace_input_metadata

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceInputMetadata(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_input_metadata
  });

  test('getWorkspaceOutputsV2 request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceOutputsV2() result:');
    // begin-get_workspace_outputs_v2

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceOutputsV2(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_outputs_v2
  });

  test('getWorkspaceOutputs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceOutputs() result:');
    // begin-get_workspace_outputs

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceOutputs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_outputs
  });

  test('getWorkspaceResourcesV2 request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceResourcesV2() result:');
    // begin-get_workspace_resources_v2

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceResourcesV2(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_resources_v2
  });

  test('getWorkspaceResources request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceResources() result:');
    // begin-get_workspace_resources

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceResources(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_resources
  });

  test('getWorkspaceState request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceState() result:');
    // begin-get_workspace_state

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceState(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_state
  });

  test('getWorkspaceTemplateState request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceTemplateState() result:');
    // begin-get_workspace_template_state

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceTemplateState(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_template_state
  });

  test('getWorkspaceActivityLogs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceActivityLogs() result:');
    // begin-get_workspace_activity_logs

    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceActivityLogs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_activity_logs
  });

  test('getWorkspaceLogUrls request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceLogUrls() result:');
    // begin-get_workspace_log_urls

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceLogUrls(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_log_urls
  });

  test('getTemplateLogs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTemplateLogs() result:');
    // begin-get_template_logs

    const params = {
      wId: 'testString',
      tId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getTemplateLogs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_template_logs
  });

  test('getTemplateActivityLog request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getTemplateActivityLog() result:');
    // begin-get_template_activity_log

    const params = {
      wId: 'testString',
      tId: 'testString',
      activityId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getTemplateActivityLog(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_template_activity_log
  });

  test('listActions request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listActions() result:');
    // begin-list_actions

    let res;
    try {
      res = await schematicsService.listActions({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_actions
  });

  test('createAction request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createAction() result:');
    // begin-create_action

    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      git_repo_url: 'https://github.com/Cloud-Schematics/ansible-is-instance-actions',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'git',
      git: gitSourceModel,
    };

    const params = {
      name: 'Example-12ab1334',
      description: 'action_description',
      location: 'us-south',
      resourceGroup: 'test',
      tags: ['department:HR', 'application:compensation', 'environment:staging', 'env:dev', 'k8s'],
      source: externalSourceModel,
    };

    let res;
    try {
      res = await schematicsService.createAction(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_action
  });

  test('getAction request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getAction() result:');
    // begin-get_action

    const params = {
      actionId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getAction(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_action
  });

  test('updateAction request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateAction() result:');
    // begin-update_action

    // Request models needed by this operation.

    // GitSource
    const gitSourceModel = {
      git_repo_url: 'https://github.com/Cloud-Schematics/ansible-lamp-stack',
      git_branch: 'v2.0',
    };

    // ExternalSource
    const externalSourceModel = {
      source_type: 'git_hub',
      git: gitSourceModel,
    };

    // VariableMetadata
    const variableMetadataModel = {
      type: 'string',
      secure: true,
    };

    // VariableData
    const variableDataModel = {
      name: 'db_password',
      value: 'NewSecurePassword456',
      metadata: variableMetadataModel,
    };

    const params = {
      actionId: 'testString',
      name: 'Deploy LAMP Stack - Updated',
      description: 'Updated action to deploy LAMP stack with new configuration',
      tags: ['env:production', 'app:lamp', 'version:2.0'],
      source: externalSourceModel,
      commandParameter: 'site-v2.yml',
      inputs: [variableDataModel],
    };

    let res;
    try {
      res = await schematicsService.updateAction(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_action
  });

  test('uploadTemplateTarAction request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('uploadTemplateTarAction() result:');
    // begin-upload_template_tar_action

    const params = {
      actionId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.uploadTemplateTarAction(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-upload_template_tar_action
  });

  test('listWorkspaceActivities request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listWorkspaceActivities() result:');
    // begin-list_workspace_activities

    const params = {
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.listWorkspaceActivities(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_workspace_activities
  });

  test('getWorkspaceActivity request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceActivity() result:');
    // begin-get_workspace_activity

    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceActivity(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_activity
  });

  test('runWorkspaceCommands request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('runWorkspaceCommands() result:');
    // begin-run_workspace_commands

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    let res;
    try {
      res = await schematicsService.runWorkspaceCommands(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-run_workspace_commands
  });

  test('applyWorkspaceCommand request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('applyWorkspaceCommand() result:');
    // begin-apply_workspace_command

    const params = {
      refreshToken: 'testString',
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.applyWorkspaceCommand(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-apply_workspace_command
  });

  test('destroyWorkspaceCommand request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('destroyWorkspaceCommand() result:');
    // begin-destroy_workspace_command

    const params = {
      refreshToken: 'testString',
      wId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.destroyWorkspaceCommand(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-destroy_workspace_command
  });

  test('planWorkspaceCommand request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('planWorkspaceCommand() result:');
    // begin-plan_workspace_command

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    let res;
    try {
      res = await schematicsService.planWorkspaceCommand(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-plan_workspace_command
  });

  test('refreshWorkspaceCommand request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('refreshWorkspaceCommand() result:');
    // begin-refresh_workspace_command

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    let res;
    try {
      res = await schematicsService.refreshWorkspaceCommand(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-refresh_workspace_command
  });

  test('listJobs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listJobs() result:');
    // begin-list_jobs

    let res;
    try {
      res = await schematicsService.listJobs({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_jobs
  });

  test('createJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createJob() result:');
    // begin-create_job

    const params = {
      refreshToken: 'testString',
      commandObject: 'action',
      commandObjectId: 'us-east.ACTION.Example-12a1b212.3287dc42',
      commandName: 'ansible_playbook_run',
      commandParameter: 'site.yml',
    };

    let res;
    try {
      res = await schematicsService.createJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_job
  });

  test('getJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getJob() result:');
    // begin-get_job

    const params = {
      jobId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_job
  });

  test('updateJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateJob() result:');
    // begin-update_job

    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
      commandObject: 'action',
      commandObjectId: 'us-east.ACTION.Example-12a1b212.3287dc42',
      commandName: 'ansible_playbook_run',
      commandParameter: 'site.yml',
    };

    let res;
    try {
      res = await schematicsService.updateJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_job
  });

  test('listJobLogs request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listJobLogs() result:');
    // begin-list_job_logs

    const params = {
      jobId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.listJobLogs(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_job_logs
  });

  test('getJobFiles request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getJobFiles() result:');
    // begin-get_job_files

    const params = {
      jobId: 'testString',
      fileType: 'template_repo',
    };

    let res;
    try {
      res = await schematicsService.getJobFiles(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_job_files
  });

  test('createWorkspaceDeletionJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createWorkspaceDeletionJob() result:');
    // begin-create_workspace_deletion_job

    const params = {
      refreshToken: 'testString',
      job: 'delete',
      workspaces: ['us-south.workspace.testWorkspace.a6010c37', 'us-south.workspace.teraformNewupdatedone.72011986', 'us-south.workspace.readterraform.400b427c', 'us-south.workspace.myworkspacesink.49745827', 'us-south.workspace.ReadTerraformTemp.c98c9774', 'us-south.workspace.SampleTest1.2a51c3a1'],
    };

    let res;
    try {
      res = await schematicsService.createWorkspaceDeletionJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_workspace_deletion_job
  });

  test('getWorkspaceDeletionJobStatus request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getWorkspaceDeletionJobStatus() result:');
    // begin-get_workspace_deletion_job_status

    const params = {
      wjId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getWorkspaceDeletionJobStatus(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_workspace_deletion_job_status
  });

  test('listInventories request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listInventories() result:');
    // begin-list_inventories

    let res;
    try {
      res = await schematicsService.listInventories({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_inventories
  });

  test('createInventory request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createInventory() result:');
    // begin-create_inventory

    const params = {
      name: 'dev-inventoryapidocexample',
      description: 'My cloud linux inventory',
      location: 'us-east',
      resourceGroup: 'Default',
      inventoriesIni: '[windows]\n158.177.7.181',
    };

    let res;
    try {
      res = await schematicsService.createInventory(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_inventory
  });

  test('getInventory request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getInventory() result:');
    // begin-get_inventory

    const params = {
      inventoryId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getInventory(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_inventory
  });

  test('replaceInventory request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceInventory() result:');
    // begin-replace_inventory

    // Request models needed by this operation.

    // CredentialVariableMetadata
    const credentialVariableMetadataModel = {
    };

    // CredentialVariableData
    const credentialVariableDataModel = {
      metadata: credentialVariableMetadataModel,
    };

    // Host
    const hostModel = {
      name: '158.177.7.182',
      credential: credentialVariableDataModel,
    };

    // Group
    const groupModel = {
      name: 'windows',
      credentials: credentialVariableDataModel,
      hosts: [hostModel],
    };

    // InventoryView
    const inventoryViewModel = {
      groups: [groupModel],
    };

    const params = {
      inventoryId: 'testString',
      name: 'dev-inventoryapidocexample',
      description: 'My cloud linux inventory',
      location: 'us-east',
      resourceGroup: 'Default',
      connectionType: 'ssh',
      inventoriesIni: '[windows]\n158.177.7.182',
      inventoryView: inventoryViewModel,
    };

    let res;
    try {
      res = await schematicsService.replaceInventory(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_inventory
  });

  test('listResourceQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listResourceQuery() result:');
    // begin-list_resource_query

    let res;
    try {
      res = await schematicsService.listResourceQuery({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_resource_query
  });

  test('createResourceQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createResourceQuery() result:');
    // begin-create_resource_query

    // Request models needed by this operation.

    // ResourceQueryParam
    const resourceQueryParamModel = {
      name: 'workspace-id',
      value: 'us-east.ACTION.kubectlWorkshop.1010101',
      description: 'string',
    };

    // ResourceQuery
    const resourceQueryModel = {
      query_type: 'workspaces',
      query_condition: [resourceQueryParamModel],
    };

    const params = {
      type: 'workspace_resource',
      name: 'hello',
      queries: [resourceQueryModel],
    };

    let res;
    try {
      res = await schematicsService.createResourceQuery(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_resource_query
  });

  test('getResourcesQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getResourcesQuery() result:');
    // begin-get_resources_query

    const params = {
      queryId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getResourcesQuery(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_resources_query
  });

  test('executeResourceQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('executeResourceQuery() result:');
    // begin-execute_resource_query

    const params = {
      queryId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.executeResourceQuery(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-execute_resource_query
  });

  test('replaceResourcesQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('replaceResourcesQuery() result:');
    // begin-replace_resources_query

    // Request models needed by this operation.

    // ResourceQueryParam
    const resourceQueryParamModel = {
      name: 'workspace-id',
      value: 'us-east.ACTION.kubectlWorkshop.1010101',
      description: 'string',
    };

    // ResourceQuery
    const resourceQueryModel = {
      query_type: 'workspaces',
      query_condition: [resourceQueryParamModel],
    };

    const params = {
      queryId: 'testString',
      type: 'workspace_resource',
      name: 'hello my world',
      queries: [resourceQueryModel],
    };

    let res;
    try {
      res = await schematicsService.replaceResourcesQuery(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-replace_resources_query
  });

  test('listAgentData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listAgentData() result:');
    // begin-list_agent_data

    let res;
    try {
      res = await schematicsService.listAgentData({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_agent_data
  });

  test('createAgentData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createAgentData() result:');
    // begin-create_agent_data

    // Request models needed by this operation.

    // AgentInfrastructure
    const agentInfrastructureModel = {
      infra_type: 'ibm_kubernetes',
      cluster_id: 'cluster_id',
      cluster_resource_group: 'Default',
      cos_instance_name: 'blueprint_basic',
      cos_bucket_name: 'sample_bucket_name',
      cos_bucket_region: 'us-east',
    };

    // VariableMetadata
    const variableMetadataModel = {
      secure: true,
    };

    // VariableData
    const variableDataModel = {
      name: 'ibmcloud_api_key',
      value: '<api_key of the account where cluster and cos are present>',
      metadata: variableMetadataModel,
    };

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    const params = {
      name: 'AgentName',
      resourceGroup: 'Default',
      version: 'v1.0.0',
      schematicsLocation: 'us-south',
      agentLocation: 'us-south',
      agentInfrastructure: agentInfrastructureModel,
      description: 'Create Agent',
      tags: ['tag1', 'tag2'],
      agentInputs: [variableDataModel],
      userState: agentUserStateModel,
    };

    let res;
    try {
      res = await schematicsService.createAgentData(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_agent_data
  });

  test('getAgentData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getAgentData() result:');
    // begin-get_agent_data

    const params = {
      agentId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getAgentData(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_agent_data
  });

  test('updateAgentData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateAgentData() result:');
    // begin-update_agent_data

    // Request models needed by this operation.

    // AgentInfrastructure
    const agentInfrastructureModel = {
      infra_type: 'ibm_kubernetes',
      cluster_id: 'cluster_id',
      cluster_resource_group: 'Default',
      cos_instance_name: 'blueprint_basic',
      cos_bucket_name: 'sample_bucket_name',
      cos_bucket_region: 'us-east',
    };

    // VariableMetadata
    const variableMetadataModel = {
      secure: true,
    };

    // VariableData
    const variableDataModel = {
      name: 'ibmcloud_api_key',
      value: '<api_key of the account where cluster and cos are present>',
      metadata: variableMetadataModel,
    };

    // AgentUserState
    const agentUserStateModel = {
      state: 'enable',
    };

    const params = {
      agentId: 'testString',
      name: 'AgentName',
      resourceGroup: 'Default',
      version: 'v1.0.0',
      schematicsLocation: 'us-south',
      agentLocation: 'us-south',
      agentInfrastructure: agentInfrastructureModel,
      description: 'New Description',
      tags: ['tag1', 'tag2'],
      agentInputs: [variableDataModel],
      userState: agentUserStateModel,
    };

    let res;
    try {
      res = await schematicsService.updateAgentData(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_agent_data
  });

  test('getAgentVersions request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getAgentVersions() result:');
    // begin-get_agent_versions

    let res;
    try {
      res = await schematicsService.getAgentVersions({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_agent_versions
  });

  test('prsAgentJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('prsAgentJob() result:');
    // begin-prs_agent_job

    const params = {
      agentId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.prsAgentJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-prs_agent_job
  });

  test('healthCheckAgentJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('healthCheckAgentJob() result:');
    // begin-health_check_agent_job

    const params = {
      agentId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.healthCheckAgentJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-health_check_agent_job
  });

  test('deployAgentJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deployAgentJob() result:');
    // begin-deploy_agent_job

    const params = {
      agentId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.deployAgentJob(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-deploy_agent_job
  });

  test('getKmsSettings request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getKmsSettings() result:');
    // begin-get_kms_settings

    const params = {
      location: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getKmsSettings(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_kms_settings
  });

  test('updateKmsSettings request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateKmsSettings() result:');
    // begin-update_kms_settings

    // Request models needed by this operation.

    // KMSSettingsPrimaryCrk
    const kmsSettingsPrimaryCrkModel = {
      kms_name: 'Key Protect-xxx',
      kms_private_endpoint: 'https://private.us-south.kms.cloud.ibm.com',
      key_crn: 'crn:v1:public:kms:us-south:a/010101010:key:3a14ceaf-c679-455d-10101010',
    };

    const params = {
      location: 'US',
      encryptionScheme: 'byok',
      resourceGroup: 'Default',
      primaryCrk: kmsSettingsPrimaryCrkModel,
    };

    let res;
    try {
      res = await schematicsService.updateKmsSettings(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_kms_settings
  });

  test('listKms request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listKms() result:');
    // begin-list_kms

    const params = {
      encryptionScheme: 'testString',
      location: 'testString',
    };

    let res;
    try {
      res = await schematicsService.listKms(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_kms
  });

  test('listPolicy request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listPolicy() result:');
    // begin-list_policy

    let res;
    try {
      res = await schematicsService.listPolicy({});
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_policy
  });

  test('createPolicy request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createPolicy() result:');
    // begin-create_policy

    const params = {
      kind: 'agent_assignment_policy',
      name: 'new-policy-dev',
      description: 'Policy for job execution of secured workspaces on agent1',
      resourceGroup: 'Default',
      tags: ['policy:secured-job'],
      location: 'us-south',
    };

    let res;
    try {
      res = await schematicsService.createPolicy(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_policy
  });

  test('getPolicy request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPolicy() result:');
    // begin-get_policy

    const params = {
      policyId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.getPolicy(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_policy
  });

  test('updatePolicy request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updatePolicy() result:');
    // begin-update_policy

    const params = {
      policyId: 'testString',
      kind: 'agent_assignment_policy',
      name: 'new-policy-dev',
      description: 'Policy for job execution of secured workspaces on agent1 updated',
      resourceGroup: 'Default',
      tags: ['policy:secured-job'],
      location: 'us-south',
    };

    let res;
    try {
      res = await schematicsService.updatePolicy(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_policy
  });

  test('deleteWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deleteWorkspace() result:');
    // begin-delete_workspace

    const params = {
      wId: 'testString',
      refreshToken: 'testString',
    };

    let res;
    try {
      res = await schematicsService.deleteWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-delete_workspace
  });

  test('deleteAction request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_action

    const params = {
      actionId: 'testString',
    };

    try {
      await schematicsService.deleteAction(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_action
  });

  test('deleteWorkspaceActivity request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deleteWorkspaceActivity() result:');
    // begin-delete_workspace_activity

    const params = {
      wId: 'testString',
      activityId: 'testString',
    };

    let res;
    try {
      res = await schematicsService.deleteWorkspaceActivity(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-delete_workspace_activity
  });

  test('deleteJob request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_job

    const params = {
      jobId: 'testString',
      refreshToken: 'testString',
    };

    try {
      await schematicsService.deleteJob(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_job
  });

  test('deleteInventory request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_inventory

    const params = {
      inventoryId: 'testString',
    };

    try {
      await schematicsService.deleteInventory(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_inventory
  });

  test('deleteResourcesQuery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_resources_query

    const params = {
      queryId: 'testString',
    };

    try {
      await schematicsService.deleteResourcesQuery(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_resources_query
  });

  test('deleteAgentData request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_agent_data

    const params = {
      agentId: 'testString',
    };

    try {
      await schematicsService.deleteAgentData(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_agent_data
  });

  test('deleteAgentResources request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deleteAgentResources() result:');
    // begin-delete_agent_resources

    const params = {
      agentId: 'testString',
      refreshToken: 'testString',
    };

    let res;
    try {
      res = await schematicsService.deleteAgentResources(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-delete_agent_resources
  });

  test('deletePolicy request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    // begin-delete_policy

    const params = {
      policyId: 'testString',
    };

    try {
      await schematicsService.deletePolicy(params);
    } catch (err) {
      console.warn(err);
    }

    // end-delete_policy
  });
});
