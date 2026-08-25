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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator } = sdkCorePackage;
const SchematicsV1 = require('../../dist/schematics/v1');

const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
  checkForSuccessfulExecution,
} = require('@ibm-cloud/sdk-test-utilities');

const schematicsServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://schematics.cloud.ibm.com',
};

const schematicsService = new SchematicsV1(schematicsServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(schematicsService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('SchematicsV1', () => {
  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });

  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = SchematicsV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(SchematicsV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(SchematicsV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(SchematicsV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = SchematicsV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(SchematicsV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new SchematicsV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new SchematicsV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(SchematicsV1.DEFAULT_SERVICE_URL);
    });
  });

  describe('listLocations', () => {
    describe('positive tests', () => {
      function __listLocationsTest() {
        // Construct the params object for operation listLocations
        const listLocationsParams = {};

        const listLocationsResult = schematicsService.listLocations(listLocationsParams);

        // all methods should return a Promise
        expectToBePromise(listLocationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/locations', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listLocationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listLocationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listLocationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listLocationsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listLocations(listLocationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listLocations({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listResourceGroup', () => {
    describe('positive tests', () => {
      function __listResourceGroupTest() {
        // Construct the params object for operation listResourceGroup
        const listResourceGroupParams = {};

        const listResourceGroupResult = schematicsService.listResourceGroup(listResourceGroupParams);

        // all methods should return a Promise
        expectToBePromise(listResourceGroupResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/resource_groups', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listResourceGroupTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listResourceGroupTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listResourceGroupTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listResourceGroupParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listResourceGroup(listResourceGroupParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listResourceGroup({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('getSchematicsVersion', () => {
    describe('positive tests', () => {
      function __getSchematicsVersionTest() {
        // Construct the params object for operation getSchematicsVersion
        const getSchematicsVersionParams = {};

        const getSchematicsVersionResult = schematicsService.getSchematicsVersion(getSchematicsVersionParams);

        // all methods should return a Promise
        expectToBePromise(getSchematicsVersionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/version', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSchematicsVersionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getSchematicsVersionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getSchematicsVersionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSchematicsVersionParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getSchematicsVersion(getSchematicsVersionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.getSchematicsVersion({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('processTemplateMetaData', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // GitSource
      const gitSourceModel = {
        computed_git_repo_url: 'https://github.com/IBM-Cloud/terraform-provider-ibm/tree/master/examples/ibm-vsi',
        git_repo_url: 'https://github.com/IBM-Cloud/terraform-provider-ibm',
        git_token: 'testString',
        git_repo_folder: 'examples/ibm-vsi',
        git_release: 'v1.0.0',
        git_branch: 'master',
      };

      // CatalogSource
      const catalogSourceModel = {
        catalog_name: 'testString',
        catalog_id: 'testString',
        offering_name: 'testString',
        offering_version: 'testString',
        offering_kind: 'testString',
        offering_target_kind: 'testString',
        offering_id: 'testString',
        offering_version_id: 'testString',
        offering_version_flavour_name: 'testString',
        offering_repo_url: 'testString',
        offering_provisioner_working_directory: 'testString',
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
      };

      // ExternalSource
      const externalSourceModel = {
        source_type: 'git_hub',
        git: gitSourceModel,
        catalog: catalogSourceModel,
      };

      function __processTemplateMetaDataTest() {
        // Construct the params object for operation processTemplateMetaData
        const templateType = 'terraform_v1_0';
        const source = externalSourceModel;
        const region = 'testString';
        const sourceType = 'local';
        const xGithubToken = 'testString';
        const processTemplateMetaDataParams = {
          templateType,
          source,
          region,
          sourceType,
          xGithubToken,
        };

        const processTemplateMetaDataResult = schematicsService.processTemplateMetaData(processTemplateMetaDataParams);

        // all methods should return a Promise
        expectToBePromise(processTemplateMetaDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/template_metadata_processor', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.template_type).toEqual(templateType);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.region).toEqual(region);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __processTemplateMetaDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __processTemplateMetaDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __processTemplateMetaDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const templateType = 'terraform_v1_0';
        const source = externalSourceModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const processTemplateMetaDataParams = {
          templateType,
          source,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.processTemplateMetaData(processTemplateMetaDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.processTemplateMetaData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.processTemplateMetaData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listWorkspaces', () => {
    describe('positive tests', () => {
      function __listWorkspacesTest() {
        // Construct the params object for operation listWorkspaces
        const offset = 0;
        const limit = 100;
        const profile = 'ids';
        const resourceGroup = 'testString';
        const listWorkspacesParams = {
          offset,
          limit,
          profile,
          resourceGroup,
        };

        const listWorkspacesResult = schematicsService.listWorkspaces(listWorkspacesParams);

        // all methods should return a Promise
        expectToBePromise(listWorkspacesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.resource_group).toEqual(resourceGroup);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listWorkspacesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listWorkspacesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listWorkspacesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listWorkspacesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaces(listWorkspacesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listWorkspaces({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createWorkspace', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ServiceExtensions
      const serviceExtensionsModel = {
        name: 'flavor',
        value: 'testString',
        type: 'string',
      };

      // CatalogRef
      const catalogRefModel = {
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
        offering_version: 'testString',
        service_extensions: [serviceExtensionsModel],
      };

      // Dependencies
      const dependenciesModel = {
        parents: ['testString'],
        children: ['testString'],
      };

      // SharedTargetData
      const sharedTargetDataModel = {
        cluster_created_on: '2019-01-01T12:00:00.000Z',
        cluster_id: 'testString',
        cluster_name: 'testString',
        cluster_type: 'testString',
        entitlement_keys: [{ anyKey: 'anyValue' }],
        namespace: 'testString',
        region: 'testString',
        resource_group_id: 'testString',
        worker_count: 0,
        worker_machine_type: 'testString',
      };

      // EnvironmentValuesMetadata
      const environmentValuesMetadataModel = {
        hidden: true,
        name: 'testString',
        secure: true,
      };

      // TftParametersObject
      const tftParametersObjectModel = {
        name: 'testString',
        value: 'testString',
      };

      // InjectTerraformTemplateInner
      const injectTerraformTemplateInnerModel = {
        tft_git_url: 'testString',
        tft_git_token: 'testString',
        tft_prefix: 'testString',
        injection_type: 'testString',
        tft_name: 'testString',
        tft_parameters: [tftParametersObjectModel],
      };

      // WorkspaceVariableRequest
      const workspaceVariableRequestModel = {
        description: 'testString',
        name: 'region',
        secure: true,
        type: 'string',
        use_default: true,
        value: 'us-south',
      };

      // TemplateSourceDataRequest
      const templateSourceDataRequestModel = {
        env_values: [{ anyKey: 'anyValue' }],
        env_values_metadata: [environmentValuesMetadataModel],
        folder: 'testString',
        compact: true,
        init_state_file: 'testString',
        injectors: [injectTerraformTemplateInnerModel],
        type: 'terraform_v1.9',
        uninstall_script_name: 'testString',
        values: 'testString',
        values_metadata: [{ anyKey: 'anyValue' }],
        variablestore: [workspaceVariableRequestModel],
      };

      // TemplateRepoRequest
      const templateRepoRequestModel = {
        branch: 'testString',
        release: 'testString',
        repo_sha_value: 'testString',
        repo_url: 'testString',
        url: 'https://github.com/ptaube/tf_cloudless_sleepy',
        skip_submodules_checkout: true,
      };

      // WorkspaceStatusRequest
      const workspaceStatusRequestModel = {
        frozen: true,
        frozen_at: '2019-01-01T12:00:00.000Z',
        frozen_by: 'testString',
        locked: true,
        locked_by: 'testString',
        locked_time: '2019-01-01T12:00:00.000Z',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      function __createWorkspaceTest() {
        // Construct the params object for operation createWorkspace
        const appliedShareddataIds = ['testString'];
        const catalogRef = catalogRefModel;
        const dependencies = dependenciesModel;
        const description = 'Workspace to provision infrastructure';
        const location = 'us-east';
        const name = 'my-terraform-workspace';
        const resourceGroup = 'Default';
        const sharedData = sharedTargetDataModel;
        const tags = ['env:dev', 'project:demo'];
        const templateData = [templateSourceDataRequestModel];
        const templateRef = 'testString';
        const templateRepo = templateRepoRequestModel;
        const type = ['terraform_v1.9'];
        const workspaceStatus = workspaceStatusRequestModel;
        const agentId = 'testString';
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const createWorkspaceParams = {
          appliedShareddataIds,
          catalogRef,
          dependencies,
          description,
          location,
          name,
          resourceGroup,
          sharedData,
          tags,
          templateData,
          templateRef,
          templateRepo,
          type,
          workspaceStatus,
          agentId,
          settings,
          xGithubToken,
        };

        const createWorkspaceResult = schematicsService.createWorkspace(createWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(createWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.applied_shareddata_ids).toEqual(appliedShareddataIds);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_ref).toEqual(templateRef);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
        expect(mockRequestOptions.body.settings).toEqual(settings);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createWorkspaceParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspace(createWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createWorkspace({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('deleteWorkspace', () => {
    describe('positive tests', () => {
      function __deleteWorkspaceTest() {
        // Construct the params object for operation deleteWorkspace
        const wId = 'testString';
        const refreshToken = 'testString';
        const destroyResources = 'testString';
        const deleteWorkspaceParams = {
          wId,
          refreshToken,
          destroyResources,
        };

        const deleteWorkspaceResult = schematicsService.deleteWorkspace(deleteWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.qs.destroy_resources).toEqual(destroyResources);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteWorkspaceParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspace(deleteWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspace', () => {
    describe('positive tests', () => {
      function __getWorkspaceTest() {
        // Construct the params object for operation getWorkspace
        const wId = 'testString';
        const getWorkspaceParams = {
          wId,
        };

        const getWorkspaceResult = schematicsService.getWorkspace(getWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspace(getWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateWorkspace', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ServiceExtensions
      const serviceExtensionsModel = {
        name: 'flavor',
        value: 'testString',
        type: 'string',
      };

      // CatalogRef
      const catalogRefModel = {
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
        offering_version: 'testString',
        service_extensions: [serviceExtensionsModel],
      };

      // Dependencies
      const dependenciesModel = {
        parents: ['testString'],
        children: ['testString'],
      };

      // SharedTargetData
      const sharedTargetDataModel = {
        cluster_created_on: '2019-01-01T12:00:00.000Z',
        cluster_id: 'testString',
        cluster_name: 'testString',
        cluster_type: 'testString',
        entitlement_keys: [{ anyKey: 'anyValue' }],
        namespace: 'testString',
        region: 'testString',
        resource_group_id: 'testString',
        worker_count: 0,
        worker_machine_type: 'testString',
      };

      // EnvironmentValuesMetadata
      const environmentValuesMetadataModel = {
        hidden: true,
        name: 'testString',
        secure: true,
      };

      // TftParametersObject
      const tftParametersObjectModel = {
        name: 'testString',
        value: 'testString',
      };

      // InjectTerraformTemplateInner
      const injectTerraformTemplateInnerModel = {
        tft_git_url: 'testString',
        tft_git_token: 'testString',
        tft_prefix: 'testString',
        injection_type: 'testString',
        tft_name: 'testString',
        tft_parameters: [tftParametersObjectModel],
      };

      // WorkspaceVariableRequest
      const workspaceVariableRequestModel = {
        description: 'testString',
        name: 'testString',
        secure: true,
        type: 'testString',
        use_default: true,
        value: 'testString',
      };

      // TemplateSourceDataRequest
      const templateSourceDataRequestModel = {
        env_values: [{ anyKey: 'anyValue' }],
        env_values_metadata: [environmentValuesMetadataModel],
        folder: 'testString',
        compact: true,
        init_state_file: 'testString',
        injectors: [injectTerraformTemplateInnerModel],
        type: 'testString',
        uninstall_script_name: 'testString',
        values: 'testString',
        values_metadata: [{ anyKey: 'anyValue' }],
        variablestore: [workspaceVariableRequestModel],
      };

      // TemplateRepoUpdateRequest
      const templateRepoUpdateRequestModel = {
        branch: 'testString',
        release: 'testString',
        repo_sha_value: 'testString',
        repo_url: 'testString',
        url: 'testString',
        skip_submodules_checkout: true,
      };

      // WorkspaceStatusUpdateRequest
      const workspaceStatusUpdateRequestModel = {
        frozen: false,
        frozen_at: '2019-01-01T12:00:00.000Z',
        frozen_by: 'testString',
        locked: true,
        locked_by: 'testString',
        locked_time: '2019-01-01T12:00:00.000Z',
      };

      // WorkspaceStatusMessage
      const workspaceStatusMessageModel = {
        status_code: 'testString',
        status_msg: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      function __updateWorkspaceTest() {
        // Construct the params object for operation updateWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'Updated workspace description';
        const dependencies = dependenciesModel;
        const name = 'my-workspace-updated';
        const sharedData = sharedTargetDataModel;
        const tags = ['env:production', 'team:devops'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['testString'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const agentId = 'testString';
        const settings = [variableDataModel];
        const updateWorkspaceParams = {
          wId,
          catalogRef,
          description,
          dependencies,
          name,
          sharedData,
          tags,
          templateData,
          templateRepo,
          type,
          workspaceStatus,
          workspaceStatusMsg,
          agentId,
          settings,
        };

        const updateWorkspaceResult = schematicsService.updateWorkspace(updateWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(updateWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.workspace_status_msg).toEqual(workspaceStatusMsg);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateWorkspace(updateWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceWorkspace', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // ServiceExtensions
      const serviceExtensionsModel = {
        name: 'flavor',
        value: 'testString',
        type: 'string',
      };

      // CatalogRef
      const catalogRefModel = {
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
        offering_version: 'testString',
        service_extensions: [serviceExtensionsModel],
      };

      // Dependencies
      const dependenciesModel = {
        parents: ['testString'],
        children: ['testString'],
      };

      // SharedTargetData
      const sharedTargetDataModel = {
        cluster_created_on: '2019-01-01T12:00:00.000Z',
        cluster_id: 'testString',
        cluster_name: 'testString',
        cluster_type: 'testString',
        entitlement_keys: [{ anyKey: 'anyValue' }],
        namespace: 'testString',
        region: 'testString',
        resource_group_id: 'testString',
        worker_count: 0,
        worker_machine_type: 'testString',
      };

      // EnvironmentValuesMetadata
      const environmentValuesMetadataModel = {
        hidden: true,
        name: 'testString',
        secure: true,
      };

      // TftParametersObject
      const tftParametersObjectModel = {
        name: 'testString',
        value: 'testString',
      };

      // InjectTerraformTemplateInner
      const injectTerraformTemplateInnerModel = {
        tft_git_url: 'testString',
        tft_git_token: 'testString',
        tft_prefix: 'testString',
        injection_type: 'testString',
        tft_name: 'testString',
        tft_parameters: [tftParametersObjectModel],
      };

      // WorkspaceVariableRequest
      const workspaceVariableRequestModel = {
        description: 'Description of sample_var',
        name: 'sample_var',
        secure: false,
        type: 'testString',
        use_default: true,
        value: 'THIS IS IBM CLOUD TERRAFORM CLI DEMO',
      };

      // TemplateSourceDataRequest
      const templateSourceDataRequestModel = {
        env_values: [{ anyKey: 'anyValue' }],
        env_values_metadata: [environmentValuesMetadataModel],
        folder: '.',
        compact: true,
        init_state_file: 'testString',
        injectors: [injectTerraformTemplateInnerModel],
        type: 'terraform_v1.0',
        uninstall_script_name: 'testString',
        values: 'testString',
        values_metadata: [{ anyKey: 'anyValue' }],
        variablestore: [workspaceVariableRequestModel],
      };

      // TemplateRepoUpdateRequest
      const templateRepoUpdateRequestModel = {
        branch: 'testString',
        release: 'testString',
        repo_sha_value: 'testString',
        repo_url: 'testString',
        url: 'https://github.com/ptaube/tf_cloudless_sleepy',
        skip_submodules_checkout: true,
      };

      // WorkspaceStatusUpdateRequest
      const workspaceStatusUpdateRequestModel = {
        frozen: true,
        frozen_at: '2019-01-01T12:00:00.000Z',
        frozen_by: 'testString',
        locked: true,
        locked_by: 'testString',
        locked_time: '2019-01-01T12:00:00.000Z',
      };

      // WorkspaceStatusMessage
      const workspaceStatusMessageModel = {
        status_code: 'testString',
        status_msg: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      function __replaceWorkspaceTest() {
        // Construct the params object for operation replaceWorkspace
        const wId = 'testString';
        const catalogRef = catalogRefModel;
        const description = 'terraform workspace updated';
        const dependencies = dependenciesModel;
        const name = 'testWorkspaceApi';
        const sharedData = sharedTargetDataModel;
        const tags = ['department:HR', 'application:compensation', 'environment:staging'];
        const templateData = [templateSourceDataRequestModel];
        const templateRepo = templateRepoUpdateRequestModel;
        const type = ['terraform_v1.0'];
        const workspaceStatus = workspaceStatusUpdateRequestModel;
        const workspaceStatusMsg = workspaceStatusMessageModel;
        const agentId = 'testString';
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const replaceWorkspaceParams = {
          wId,
          catalogRef,
          description,
          dependencies,
          name,
          sharedData,
          tags,
          templateData,
          templateRepo,
          type,
          workspaceStatus,
          workspaceStatusMsg,
          agentId,
          settings,
          xGithubToken,
        };

        const replaceWorkspaceResult = schematicsService.replaceWorkspace(replaceWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.catalog_ref).toEqual(catalogRef);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.dependencies).toEqual(dependencies);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.shared_data).toEqual(sharedData);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.template_data).toEqual(templateData);
        expect(mockRequestOptions.body.template_repo).toEqual(templateRepo);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.workspace_status).toEqual(workspaceStatus);
        expect(mockRequestOptions.body.workspace_status_msg).toEqual(workspaceStatusMsg);
        expect(mockRequestOptions.body.agent_id).toEqual(agentId);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceWorkspaceParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspace(replaceWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceReadme', () => {
    describe('positive tests', () => {
      function __getWorkspaceReadmeTest() {
        // Construct the params object for operation getWorkspaceReadme
        const wId = 'testString';
        const ref = 'testString';
        const formatted = 'markdown';
        const getWorkspaceReadmeParams = {
          wId,
          ref,
          formatted,
        };

        const getWorkspaceReadmeResult = schematicsService.getWorkspaceReadme(getWorkspaceReadmeParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceReadmeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/templates/readme', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.ref).toEqual(ref);
        expect(mockRequestOptions.qs.formatted).toEqual(formatted);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceReadmeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceReadmeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceReadmeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceReadmeParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceReadme(getWorkspaceReadmeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceReadme({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceReadme();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('templateRepoUpload', () => {
    describe('positive tests', () => {
      function __templateRepoUploadTest() {
        // Construct the params object for operation templateRepoUpload
        const wId = 'testString';
        const tId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const templateRepoUploadParams = {
          wId,
          tId,
          file,
          fileContentType,
        };

        const templateRepoUploadResult = schematicsService.templateRepoUpload(templateRepoUploadParams);

        // all methods should return a Promise
        expectToBePromise(templateRepoUploadResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/template_repo_upload', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.formData.file.data).toEqual(file);
        expect(mockRequestOptions.formData.file.contentType).toEqual(fileContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __templateRepoUploadTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __templateRepoUploadTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __templateRepoUploadTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const templateRepoUploadParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.templateRepoUpload(templateRepoUploadParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.templateRepoUpload({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.templateRepoUpload();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceInputs', () => {
    describe('positive tests', () => {
      function __getWorkspaceInputsTest() {
        // Construct the params object for operation getWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceInputsParams = {
          wId,
          tId,
        };

        const getWorkspaceInputsResult = schematicsService.getWorkspaceInputs(getWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceInputsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputs(getWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceWorkspaceInputs', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceVariableRequest
      const workspaceVariableRequestModel = {
        description: 'IBM Cloud region',
        name: 'region',
        secure: false,
        type: 'string',
        use_default: true,
        value: 'us-south',
      };

      function __replaceWorkspaceInputsTest() {
        // Construct the params object for operation replaceWorkspaceInputs
        const wId = 'testString';
        const tId = 'testString';
        const envValues = [{ name: 'env_variable_name', value: 'env_variable_value' }];
        const values = 'string';
        const variablestore = [workspaceVariableRequestModel];
        const replaceWorkspaceInputsParams = {
          wId,
          tId,
          envValues,
          values,
          variablestore,
        };

        const replaceWorkspaceInputsResult = schematicsService.replaceWorkspaceInputs(replaceWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(replaceWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.env_values).toEqual(envValues);
        expect(mockRequestOptions.body.values).toEqual(values);
        expect(mockRequestOptions.body.variablestore).toEqual(variablestore);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceWorkspaceInputsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceWorkspaceInputs(replaceWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAllWorkspaceInputs', () => {
    describe('positive tests', () => {
      function __getAllWorkspaceInputsTest() {
        // Construct the params object for operation getAllWorkspaceInputs
        const wId = 'testString';
        const getAllWorkspaceInputsParams = {
          wId,
        };

        const getAllWorkspaceInputsResult = schematicsService.getAllWorkspaceInputs(getAllWorkspaceInputsParams);

        // all methods should return a Promise
        expectToBePromise(getAllWorkspaceInputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/templates/values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAllWorkspaceInputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getAllWorkspaceInputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getAllWorkspaceInputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAllWorkspaceInputsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAllWorkspaceInputs(getAllWorkspaceInputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAllWorkspaceInputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAllWorkspaceInputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceInputMetadataV2', () => {
    describe('positive tests', () => {
      function __getWorkspaceInputMetadataV2Test() {
        // Construct the params object for operation getWorkspaceInputMetadataV2
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceInputMetadataV2Params = {
          wId,
          tId,
        };

        const getWorkspaceInputMetadataV2Result = schematicsService.getWorkspaceInputMetadataV2(getWorkspaceInputMetadataV2Params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputMetadataV2Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/workspaces/{w_id}/template_data/{t_id}/values_metadata', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceInputMetadataV2Test();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceInputMetadataV2Test();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceInputMetadataV2Test();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceInputMetadataV2Params = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputMetadataV2(getWorkspaceInputMetadataV2Params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadataV2({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadataV2();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceInputMetadata', () => {
    describe('positive tests', () => {
      function __getWorkspaceInputMetadataTest() {
        // Construct the params object for operation getWorkspaceInputMetadata
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceInputMetadataParams = {
          wId,
          tId,
        };

        const getWorkspaceInputMetadataResult = schematicsService.getWorkspaceInputMetadata(getWorkspaceInputMetadataParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceInputMetadataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/template_data/{t_id}/values_metadata', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceInputMetadataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceInputMetadataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceInputMetadataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceInputMetadataParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceInputMetadata(getWorkspaceInputMetadataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadata({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceInputMetadata();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceOutputsV2', () => {
    describe('positive tests', () => {
      function __getWorkspaceOutputsV2Test() {
        // Construct the params object for operation getWorkspaceOutputsV2
        const wId = 'testString';
        const getWorkspaceOutputsV2Params = {
          wId,
        };

        const getWorkspaceOutputsV2Result = schematicsService.getWorkspaceOutputsV2(getWorkspaceOutputsV2Params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceOutputsV2Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/workspaces/{w_id}/output_values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceOutputsV2Test();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceOutputsV2Test();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceOutputsV2Test();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceOutputsV2Params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceOutputsV2(getWorkspaceOutputsV2Params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputsV2({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputsV2();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceOutputs', () => {
    describe('positive tests', () => {
      function __getWorkspaceOutputsTest() {
        // Construct the params object for operation getWorkspaceOutputs
        const wId = 'testString';
        const getWorkspaceOutputsParams = {
          wId,
        };

        const getWorkspaceOutputsResult = schematicsService.getWorkspaceOutputs(getWorkspaceOutputsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceOutputsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/output_values', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceOutputsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceOutputsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceOutputsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceOutputsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceOutputs(getWorkspaceOutputsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceOutputs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceResourcesV2', () => {
    describe('positive tests', () => {
      function __getWorkspaceResourcesV2Test() {
        // Construct the params object for operation getWorkspaceResourcesV2
        const wId = 'testString';
        const getWorkspaceResourcesV2Params = {
          wId,
        };

        const getWorkspaceResourcesV2Result = schematicsService.getWorkspaceResourcesV2(getWorkspaceResourcesV2Params);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResourcesV2Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/workspaces/{w_id}/resources', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceResourcesV2Test();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceResourcesV2Test();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceResourcesV2Test();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceResourcesV2Params = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceResourcesV2(getWorkspaceResourcesV2Params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResourcesV2({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResourcesV2();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceResources', () => {
    describe('positive tests', () => {
      function __getWorkspaceResourcesTest() {
        // Construct the params object for operation getWorkspaceResources
        const wId = 'testString';
        const getWorkspaceResourcesParams = {
          wId,
        };

        const getWorkspaceResourcesResult = schematicsService.getWorkspaceResources(getWorkspaceResourcesParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceResourcesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/resources', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceResourcesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceResourcesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceResourcesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceResourcesParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceResources(getWorkspaceResourcesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResources({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceResources();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceState', () => {
    describe('positive tests', () => {
      function __getWorkspaceStateTest() {
        // Construct the params object for operation getWorkspaceState
        const wId = 'testString';
        const getWorkspaceStateParams = {
          wId,
        };

        const getWorkspaceStateResult = schematicsService.getWorkspaceState(getWorkspaceStateParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/state_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceStateParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceState(getWorkspaceStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceTemplateState', () => {
    describe('positive tests', () => {
      function __getWorkspaceTemplateStateTest() {
        // Construct the params object for operation getWorkspaceTemplateState
        const wId = 'testString';
        const tId = 'testString';
        const getWorkspaceTemplateStateParams = {
          wId,
          tId,
        };

        const getWorkspaceTemplateStateResult = schematicsService.getWorkspaceTemplateState(getWorkspaceTemplateStateParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceTemplateStateResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/state_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceTemplateStateTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceTemplateStateTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceTemplateStateTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceTemplateStateParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceTemplateState(getWorkspaceTemplateStateParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceTemplateState({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceTemplateState();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceActivityLogs', () => {
    describe('positive tests', () => {
      function __getWorkspaceActivityLogsTest() {
        // Construct the params object for operation getWorkspaceActivityLogs
        const wId = 'testString';
        const activityId = 'testString';
        const getWorkspaceActivityLogsParams = {
          wId,
          activityId,
        };

        const getWorkspaceActivityLogsResult = schematicsService.getWorkspaceActivityLogs(getWorkspaceActivityLogsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceActivityLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceActivityLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceActivityLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceActivityLogsParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivityLogs(getWorkspaceActivityLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivityLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivityLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceLogUrls', () => {
    describe('positive tests', () => {
      function __getWorkspaceLogUrlsTest() {
        // Construct the params object for operation getWorkspaceLogUrls
        const wId = 'testString';
        const getWorkspaceLogUrlsParams = {
          wId,
        };

        const getWorkspaceLogUrlsResult = schematicsService.getWorkspaceLogUrls(getWorkspaceLogUrlsParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceLogUrlsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/log_stores', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceLogUrlsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceLogUrlsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceLogUrlsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceLogUrlsParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceLogUrls(getWorkspaceLogUrlsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceLogUrls({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceLogUrls();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTemplateLogs', () => {
    describe('positive tests', () => {
      function __getTemplateLogsTest() {
        // Construct the params object for operation getTemplateLogs
        const wId = 'testString';
        const tId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const getTemplateLogsParams = {
          wId,
          tId,
          logTfCmd,
          logTfPrefix,
          logTfNullResource,
          logTfAnsible,
        };

        const getTemplateLogsResult = schematicsService.getTemplateLogs(getTemplateLogsParams);

        // all methods should return a Promise
        expectToBePromise(getTemplateLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.log_tf_cmd).toEqual(logTfCmd);
        expect(mockRequestOptions.qs.log_tf_prefix).toEqual(logTfPrefix);
        expect(mockRequestOptions.qs.log_tf_null_resource).toEqual(logTfNullResource);
        expect(mockRequestOptions.qs.log_tf_ansible).toEqual(logTfAnsible);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTemplateLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getTemplateLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getTemplateLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTemplateLogsParams = {
          wId,
          tId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateLogs(getTemplateLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getTemplateLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getTemplateLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getTemplateActivityLog', () => {
    describe('positive tests', () => {
      function __getTemplateActivityLogTest() {
        // Construct the params object for operation getTemplateActivityLog
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const logTfCmd = true;
        const logTfPrefix = true;
        const logTfNullResource = true;
        const logTfAnsible = true;
        const getTemplateActivityLogParams = {
          wId,
          tId,
          activityId,
          logTfCmd,
          logTfPrefix,
          logTfNullResource,
          logTfAnsible,
        };

        const getTemplateActivityLogResult = schematicsService.getTemplateActivityLog(getTemplateActivityLogParams);

        // all methods should return a Promise
        expectToBePromise(getTemplateActivityLogResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/runtime_data/{t_id}/log_store/actions/{activity_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.log_tf_cmd).toEqual(logTfCmd);
        expect(mockRequestOptions.qs.log_tf_prefix).toEqual(logTfPrefix);
        expect(mockRequestOptions.qs.log_tf_null_resource).toEqual(logTfNullResource);
        expect(mockRequestOptions.qs.log_tf_ansible).toEqual(logTfAnsible);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.t_id).toEqual(tId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getTemplateActivityLogTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getTemplateActivityLogTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getTemplateActivityLogTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const tId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getTemplateActivityLogParams = {
          wId,
          tId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getTemplateActivityLog(getTemplateActivityLogParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getTemplateActivityLog({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getTemplateActivityLog();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listActions', () => {
    describe('positive tests', () => {
      function __listActionsTest() {
        // Construct the params object for operation listActions
        const offset = 0;
        const limit = 100;
        const sort = 'testString';
        const profile = 'ids';
        const listActionsParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listActionsResult = schematicsService.listActions(listActionsParams);

        // all methods should return a Promise
        expectToBePromise(listActionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listActionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listActionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listActionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listActionsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listActions(listActionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listActions({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createAction', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      // GitSource
      const gitSourceModel = {
        computed_git_repo_url: 'testString',
        git_repo_url: 'https://github.com/Cloud-Schematics/ansible-is-instance-actions',
        git_token: 'testString',
        git_repo_folder: 'testString',
        git_release: 'testString',
        git_branch: 'testString',
      };

      // CatalogSource
      const catalogSourceModel = {
        catalog_name: 'testString',
        catalog_id: 'testString',
        offering_name: 'testString',
        offering_version: 'testString',
        offering_kind: 'testString',
        offering_target_kind: 'testString',
        offering_id: 'testString',
        offering_version_id: 'testString',
        offering_version_flavour_name: 'testString',
        offering_repo_url: 'testString',
        offering_provisioner_working_directory: 'testString',
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
      };

      // ExternalSource
      const externalSourceModel = {
        source_type: 'git',
        git: gitSourceModel,
        catalog: catalogSourceModel,
      };

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      function __createActionTest() {
        // Construct the params object for operation createAction
        const name = 'Example-12ab1334';
        const description = 'action_description';
        const location = 'us-south';
        const resourceGroup = 'test';
        const bastionConnectionType = 'ssh';
        const inventoryConnectionType = 'ssh';
        const tags = ['department:HR', 'application:compensation', 'environment:staging', 'env:dev', 'k8s'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'testString';
        const inventory = 'testString';
        const credentials = [credentialVariableDataModel];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const targetsIni = 'testString';
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const createActionParams = {
          name,
          description,
          location,
          resourceGroup,
          bastionConnectionType,
          inventoryConnectionType,
          tags,
          userState,
          sourceReadmeUrl,
          source,
          sourceType,
          commandParameter,
          inventory,
          credentials,
          bastion,
          bastionCredential,
          targetsIni,
          inputs,
          outputs,
          settings,
          xGithubToken,
        };

        const createActionResult = schematicsService.createAction(createActionParams);

        // all methods should return a Promise
        expectToBePromise(createActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.bastion_connection_type).toEqual(bastionConnectionType);
        expect(mockRequestOptions.body.inventory_connection_type).toEqual(inventoryConnectionType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.source_readme_url).toEqual(sourceReadmeUrl);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.inventory).toEqual(inventory);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.targets_ini).toEqual(targetsIni);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.outputs).toEqual(outputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createActionParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createAction(createActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createAction({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('deleteAction', () => {
    describe('positive tests', () => {
      function __deleteActionTest() {
        // Construct the params object for operation deleteAction
        const actionId = 'testString';
        const force = true;
        const propagate = true;
        const deleteActionParams = {
          actionId,
          force,
          propagate,
        };

        const deleteActionResult = schematicsService.deleteAction(deleteActionParams);

        // all methods should return a Promise
        expectToBePromise(deleteActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAction(deleteActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAction', () => {
    describe('positive tests', () => {
      function __getActionTest() {
        // Construct the params object for operation getAction
        const actionId = 'testString';
        const profile = 'summary';
        const getActionParams = {
          actionId,
          profile,
        };

        const getActionResult = schematicsService.getAction(getActionParams);

        // all methods should return a Promise
        expectToBePromise(getActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAction(getActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateAction', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      // GitSource
      const gitSourceModel = {
        computed_git_repo_url: 'testString',
        git_repo_url: 'https://github.com/Cloud-Schematics/ansible-lamp-stack',
        git_token: 'testString',
        git_repo_folder: 'testString',
        git_release: 'testString',
        git_branch: 'v2.0',
      };

      // CatalogSource
      const catalogSourceModel = {
        catalog_name: 'testString',
        catalog_id: 'testString',
        offering_name: 'testString',
        offering_version: 'testString',
        offering_kind: 'testString',
        offering_target_kind: 'testString',
        offering_id: 'testString',
        offering_version_id: 'testString',
        offering_version_flavour_name: 'testString',
        offering_repo_url: 'testString',
        offering_provisioner_working_directory: 'testString',
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
      };

      // ExternalSource
      const externalSourceModel = {
        source_type: 'git_hub',
        git: gitSourceModel,
        catalog: catalogSourceModel,
      };

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'db_password',
        value: 'NewSecurePassword456',
        use_default: true,
        metadata: variableMetadataModel,
      };

      function __updateActionTest() {
        // Construct the params object for operation updateAction
        const actionId = 'testString';
        const name = 'Deploy LAMP Stack - Updated';
        const description = 'Updated action to deploy LAMP stack with new configuration';
        const location = 'us-south';
        const resourceGroup = 'testString';
        const bastionConnectionType = 'ssh';
        const inventoryConnectionType = 'ssh';
        const tags = ['env:production', 'app:lamp', 'version:2.0'];
        const userState = userStateModel;
        const sourceReadmeUrl = 'testString';
        const source = externalSourceModel;
        const sourceType = 'local';
        const commandParameter = 'site-v2.yml';
        const inventory = 'testString';
        const credentials = [credentialVariableDataModel];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const targetsIni = 'testString';
        const inputs = [variableDataModel];
        const outputs = [variableDataModel];
        const settings = [variableDataModel];
        const xGithubToken = 'testString';
        const updateActionParams = {
          actionId,
          name,
          description,
          location,
          resourceGroup,
          bastionConnectionType,
          inventoryConnectionType,
          tags,
          userState,
          sourceReadmeUrl,
          source,
          sourceType,
          commandParameter,
          inventory,
          credentials,
          bastion,
          bastionCredential,
          targetsIni,
          inputs,
          outputs,
          settings,
          xGithubToken,
        };

        const updateActionResult = schematicsService.updateAction(updateActionParams);

        // all methods should return a Promise
        expectToBePromise(updateActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'X-Github-token', xGithubToken);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.bastion_connection_type).toEqual(bastionConnectionType);
        expect(mockRequestOptions.body.inventory_connection_type).toEqual(inventoryConnectionType);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.source_readme_url).toEqual(sourceReadmeUrl);
        expect(mockRequestOptions.body.source).toEqual(source);
        expect(mockRequestOptions.body.source_type).toEqual(sourceType);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.inventory).toEqual(inventory);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.targets_ini).toEqual(targetsIni);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.outputs).toEqual(outputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateAction(updateActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('uploadTemplateTarAction', () => {
    describe('positive tests', () => {
      function __uploadTemplateTarActionTest() {
        // Construct the params object for operation uploadTemplateTarAction
        const actionId = 'testString';
        const file = Buffer.from('This is a mock file.');
        const fileContentType = 'testString';
        const uploadTemplateTarActionParams = {
          actionId,
          file,
          fileContentType,
        };

        const uploadTemplateTarActionResult = schematicsService.uploadTemplateTarAction(uploadTemplateTarActionParams);

        // all methods should return a Promise
        expectToBePromise(uploadTemplateTarActionResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/actions/{action_id}/template_repo_upload', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'multipart/form-data';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.formData.file.data).toEqual(file);
        expect(mockRequestOptions.formData.file.contentType).toEqual(fileContentType);
        expect(mockRequestOptions.path.action_id).toEqual(actionId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __uploadTemplateTarActionTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __uploadTemplateTarActionTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __uploadTemplateTarActionTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const actionId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const uploadTemplateTarActionParams = {
          actionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.uploadTemplateTarAction(uploadTemplateTarActionParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarAction({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.uploadTemplateTarAction();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listWorkspaceActivities', () => {
    describe('positive tests', () => {
      function __listWorkspaceActivitiesTest() {
        // Construct the params object for operation listWorkspaceActivities
        const wId = 'testString';
        const offset = 0;
        const limit = 100;
        const listWorkspaceActivitiesParams = {
          wId,
          offset,
          limit,
        };

        const listWorkspaceActivitiesResult = schematicsService.listWorkspaceActivities(listWorkspaceActivitiesParams);

        // all methods should return a Promise
        expectToBePromise(listWorkspaceActivitiesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listWorkspaceActivitiesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listWorkspaceActivitiesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listWorkspaceActivitiesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listWorkspaceActivitiesParams = {
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listWorkspaceActivities(listWorkspaceActivitiesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listWorkspaceActivities({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listWorkspaceActivities();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteWorkspaceActivity', () => {
    describe('positive tests', () => {
      function __deleteWorkspaceActivityTest() {
        // Construct the params object for operation deleteWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const deleteWorkspaceActivityParams = {
          wId,
          activityId,
        };

        const deleteWorkspaceActivityResult = schematicsService.deleteWorkspaceActivity(deleteWorkspaceActivityParams);

        // all methods should return a Promise
        expectToBePromise(deleteWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteWorkspaceActivityTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteWorkspaceActivityTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteWorkspaceActivityTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteWorkspaceActivityParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteWorkspaceActivity(deleteWorkspaceActivityParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteWorkspaceActivity();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceActivity', () => {
    describe('positive tests', () => {
      function __getWorkspaceActivityTest() {
        // Construct the params object for operation getWorkspaceActivity
        const wId = 'testString';
        const activityId = 'testString';
        const getWorkspaceActivityParams = {
          wId,
          activityId,
        };

        const getWorkspaceActivityResult = schematicsService.getWorkspaceActivity(getWorkspaceActivityParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceActivityResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/actions/{activity_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
        expect(mockRequestOptions.path.activity_id).toEqual(activityId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceActivityTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceActivityTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceActivityTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const activityId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceActivityParams = {
          wId,
          activityId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceActivity(getWorkspaceActivityParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivity({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceActivity();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('runWorkspaceCommands', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // TerraformCommand
      const terraformCommandModel = {
        command: 'testString',
        command_params: 'testString',
        command_name: 'testString',
        command_desc: 'testString',
        command_on_error: 'testString',
        command_depends_on: 'testString',
        command_status: 'testString',
      };

      function __runWorkspaceCommandsTest() {
        // Construct the params object for operation runWorkspaceCommands
        const wId = 'testString';
        const refreshToken = 'testString';
        const commands = [terraformCommandModel];
        const operationName = 'testString';
        const description = 'testString';
        const runWorkspaceCommandsParams = {
          wId,
          refreshToken,
          commands,
          operationName,
          description,
        };

        const runWorkspaceCommandsResult = schematicsService.runWorkspaceCommands(runWorkspaceCommandsParams);

        // all methods should return a Promise
        expectToBePromise(runWorkspaceCommandsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/commands', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.commands).toEqual(commands);
        expect(mockRequestOptions.body.operation_name).toEqual(operationName);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __runWorkspaceCommandsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __runWorkspaceCommandsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __runWorkspaceCommandsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const runWorkspaceCommandsParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.runWorkspaceCommands(runWorkspaceCommandsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.runWorkspaceCommands({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.runWorkspaceCommands();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('applyWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      function __applyWorkspaceCommandTest() {
        // Construct the params object for operation applyWorkspaceCommand
        const refreshToken = 'testString';
        const wId = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const applyWorkspaceCommandParams = {
          refreshToken,
          wId,
          actionOptions,
          delegatedToken,
        };

        const applyWorkspaceCommandResult = schematicsService.applyWorkspaceCommand(applyWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(applyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/apply', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __applyWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __applyWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __applyWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const applyWorkspaceCommandParams = {
          refreshToken,
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.applyWorkspaceCommand(applyWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.applyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.applyWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('destroyWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      function __destroyWorkspaceCommandTest() {
        // Construct the params object for operation destroyWorkspaceCommand
        const refreshToken = 'testString';
        const wId = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const destroyWorkspaceCommandParams = {
          refreshToken,
          wId,
          actionOptions,
          delegatedToken,
        };

        const destroyWorkspaceCommandResult = schematicsService.destroyWorkspaceCommand(destroyWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(destroyWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/destroy', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __destroyWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __destroyWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __destroyWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const wId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const destroyWorkspaceCommandParams = {
          refreshToken,
          wId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.destroyWorkspaceCommand(destroyWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.destroyWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.destroyWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('planWorkspaceCommand', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // WorkspaceActivityOptionsTemplate
      const workspaceActivityOptionsTemplateModel = {
        target: ['testString'],
        tf_vars: ['testString'],
      };

      function __planWorkspaceCommandTest() {
        // Construct the params object for operation planWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const actionOptions = workspaceActivityOptionsTemplateModel;
        const delegatedToken = 'testString';
        const planWorkspaceCommandParams = {
          wId,
          refreshToken,
          actionOptions,
          delegatedToken,
        };

        const planWorkspaceCommandResult = schematicsService.planWorkspaceCommand(planWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(planWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/plan', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.body.action_options).toEqual(actionOptions);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __planWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __planWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __planWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const planWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.planWorkspaceCommand(planWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.planWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.planWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('refreshWorkspaceCommand', () => {
    describe('positive tests', () => {
      function __refreshWorkspaceCommandTest() {
        // Construct the params object for operation refreshWorkspaceCommand
        const wId = 'testString';
        const refreshToken = 'testString';
        const delegatedToken = 'testString';
        const refreshWorkspaceCommandParams = {
          wId,
          refreshToken,
          delegatedToken,
        };

        const refreshWorkspaceCommandResult = schematicsService.refreshWorkspaceCommand(refreshWorkspaceCommandParams);

        // all methods should return a Promise
        expectToBePromise(refreshWorkspaceCommandResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspaces/{w_id}/refresh', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'delegated_token', delegatedToken);
        expect(mockRequestOptions.path.w_id).toEqual(wId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __refreshWorkspaceCommandTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __refreshWorkspaceCommandTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __refreshWorkspaceCommandTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const refreshWorkspaceCommandParams = {
          wId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.refreshWorkspaceCommand(refreshWorkspaceCommandParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.refreshWorkspaceCommand({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.refreshWorkspaceCommand();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listJobs', () => {
    describe('positive tests', () => {
      function __listJobsTest() {
        // Construct the params object for operation listJobs
        const offset = 0;
        const limit = 100;
        const sort = 'testString';
        const profile = 'ids';
        const resource = 'workspaces';
        const resourceId = 'testString';
        const actionId = 'testString';
        const workspaceId = 'testString';
        const list = 'all';
        const listJobsParams = {
          offset,
          limit,
          sort,
          profile,
          resource,
          resourceId,
          actionId,
          workspaceId,
          list,
        };

        const listJobsResult = schematicsService.listJobs(listJobsParams);

        // all methods should return a Promise
        expectToBePromise(listJobsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.resource).toEqual(resource);
        expect(mockRequestOptions.qs.resource_id).toEqual(resourceId);
        expect(mockRequestOptions.qs.action_id).toEqual(actionId);
        expect(mockRequestOptions.qs.workspace_id).toEqual(workspaceId);
        expect(mockRequestOptions.qs.list).toEqual(list);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listJobsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listJobsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listJobsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listJobsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobs(listJobsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listJobs({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createJob', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // JobStatusWorkitem
      const jobStatusWorkitemModel = {
        workspace_id: 'testString',
        workspace_name: 'testString',
        job_id: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusFlow
      const jobStatusFlowModel = {
        flow_id: 'testString',
        flow_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        workitems: [jobStatusWorkitemModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusTemplate
      const jobStatusTemplateModel = {
        template_id: 'testString',
        template_name: 'testString',
        flow_index: 0,
        status_code: 'job_pending',
        status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusWorkspace
      const jobStatusWorkspaceModel = {
        workspace_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        flow_status: jobStatusFlowModel,
        template_status: [jobStatusTemplateModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusAction
      const jobStatusActionModel = {
        action_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        bastion_status_code: 'none',
        bastion_status_message: 'testString',
        targets_status_code: 'none',
        targets_status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusSchematicsResources
      const jobStatusSchematicsResourcesModel = {
        status_code: 'job_pending',
        status_message: 'testString',
        schematics_resource_id: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusSystem
      const jobStatusSystemModel = {
        system_status_message: 'testString',
        system_status_code: 'job_pending',
        schematics_resource_status: [jobStatusSchematicsResourcesModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatus
      const jobStatusModel = {
        position_in_queue: 72.5,
        total_in_queue: 72.5,
        workspace_job_status: jobStatusWorkspaceModel,
        action_job_status: jobStatusActionModel,
        system_job_status: jobStatusSystemModel,
        flow_job_status: jobStatusFlowModel,
      };

      // CartOrderData
      const cartOrderDataModel = {
        name: 'testString',
        value: 'testString',
        type: 'testString',
        usage_kind: ['servicetags'],
      };

      // JobDataTemplate
      const jobDataTemplateModel = {
        template_id: 'testString',
        template_name: 'testString',
        flow_index: 0,
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobDataWorkspace
      const jobDataWorkspaceModel = {
        workspace_name: 'testString',
        flow_id: 'testString',
        flow_name: 'testString',
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        template_data: [jobDataTemplateModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // Host
      const hostModel = {
        alias: 'testString',
        name: 'testString',
        credential: credentialVariableDataModel,
        vars: [variableDataModel],
      };

      // Group
      const groupModel = {
        name: 'testString',
        vars: [variableDataModel],
        credentials: credentialVariableDataModel,
        hosts: [hostModel],
      };

      // InventoryView
      const inventoryViewModel = {
        groups: [groupModel],
      };

      // InventoryResourceRecord
      const inventoryResourceRecordModel = {
        name: 'testString',
        description: 'testString',
        location: 'us-south',
        resource_group: 'testString',
        inventories_ini: 'testString',
        resource_queries: ['testString'],
        connection_type: 'testString',
        credentials: [credentialVariableDataModel],
        common_credentials: credentialVariableDataModel,
        bastion: bastionResourceDefinitionModel,
        bastion_credential: credentialVariableDataModel,
        inventory_view: inventoryViewModel,
      };

      // JobDataAction
      const jobDataActionModel = {
        action_name: 'testString',
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        updated_at: '2019-01-01T12:00:00.000Z',
        inventory_record: inventoryResourceRecordModel,
        materialized_inventory: 'testString',
      };

      // JobDataSystem
      const jobDataSystemModel = {
        key_id: 'testString',
        schematics_resource_id: ['testString'],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // GitSource
      const gitSourceModel = {
        computed_git_repo_url: 'testString',
        git_repo_url: 'testString',
        git_token: 'testString',
        git_repo_folder: 'testString',
        git_release: 'testString',
        git_branch: 'testString',
      };

      // CatalogSource
      const catalogSourceModel = {
        catalog_name: 'testString',
        catalog_id: 'testString',
        offering_name: 'testString',
        offering_version: 'testString',
        offering_kind: 'testString',
        offering_target_kind: 'testString',
        offering_id: 'testString',
        offering_version_id: 'testString',
        offering_version_flavour_name: 'testString',
        offering_repo_url: 'testString',
        offering_provisioner_working_directory: 'testString',
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
      };

      // ExternalSource
      const externalSourceModel = {
        source_type: 'local',
        git: gitSourceModel,
        catalog: catalogSourceModel,
      };

      // JobDataWorkItemLastJob
      const jobDataWorkItemLastJobModel = {
        command_object: 'workspace',
        command_object_name: 'testString',
        command_object_id: 'testString',
        command_name: 'workspace_plan',
        job_id: 'testString',
        job_status: 'job_pending',
      };

      // JobDataWorkItem
      const jobDataWorkItemModel = {
        command_object_id: 'testString',
        command_object_name: 'testString',
        layers: 'testString',
        source_type: 'local',
        source: externalSourceModel,
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        last_job: jobDataWorkItemLastJobModel,
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobDataFlow
      const jobDataFlowModel = {
        flow_id: 'testString',
        flow_name: 'testString',
        workitems: [jobDataWorkItemModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobData
      const jobDataModel = {
        job_type: 'repo_download_job',
        workspace_job_data: jobDataWorkspaceModel,
        action_job_data: jobDataActionModel,
        system_job_data: jobDataSystemModel,
        flow_job_data: jobDataFlowModel,
      };

      // JobLogSummaryRepoDownloadJob
      const jobLogSummaryRepoDownloadJobModel = {
      };

      // JobLogSummaryWorkspaceJob
      const jobLogSummaryWorkspaceJobModel = {
      };

      // JobLogSummaryWorkitems
      const jobLogSummaryWorkitemsModel = {
        workspace_id: 'testString',
        job_id: 'testString',
        log_url: 'testString',
      };

      // JobLogSummaryFlowJob
      const jobLogSummaryFlowJobModel = {
        workitems: [jobLogSummaryWorkitemsModel],
      };

      // JobLogSummaryActionJobRecap
      const jobLogSummaryActionJobRecapModel = {
        target: ['testString'],
        ok: 72.5,
        changed: 72.5,
        failed: 72.5,
        skipped: 72.5,
        unreachable: 72.5,
      };

      // JobLogSummaryActionJob
      const jobLogSummaryActionJobModel = {
        recap: jobLogSummaryActionJobRecapModel,
      };

      // JobLogSummarySystemJob
      const jobLogSummarySystemJobModel = {
        success: 72.5,
        failed: 72.5,
      };

      // JobLogSummary
      const jobLogSummaryModel = {
        job_type: 'repo_download_job',
        repo_download_job: jobLogSummaryRepoDownloadJobModel,
        workspace_job: jobLogSummaryWorkspaceJobModel,
        flow_job: jobLogSummaryFlowJobModel,
        action_job: jobLogSummaryActionJobModel,
        system_job: jobLogSummarySystemJobModel,
      };

      // AgentInfo
      const agentInfoModel = {
        id: 'testString',
        name: 'testString',
        assignment_policy_id: 'testString',
      };

      function __createJobTest() {
        // Construct the params object for operation createJob
        const refreshToken = 'testString';
        const commandObject = 'action';
        const commandObjectId = 'us-east.ACTION.Example-12a1b212.3287dc42';
        const commandName = 'ansible_playbook_run';
        const commandParameter = 'site.yml';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us-south';
        const status = jobStatusModel;
        const cartOrderData = [cartOrderDataModel];
        const data = jobDataModel;
        const bastion = bastionResourceDefinitionModel;
        const logSummary = jobLogSummaryModel;
        const agent = agentInfoModel;
        const createJobParams = {
          refreshToken,
          commandObject,
          commandObjectId,
          commandName,
          commandParameter,
          commandOptions,
          inputs,
          settings,
          tags,
          location,
          status,
          cartOrderData,
          data,
          bastion,
          logSummary,
          agent,
        };

        const createJobResult = schematicsService.createJob(createJobParams);

        // all methods should return a Promise
        expectToBePromise(createJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.command_object).toEqual(commandObject);
        expect(mockRequestOptions.body.command_object_id).toEqual(commandObjectId);
        expect(mockRequestOptions.body.command_name).toEqual(commandName);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.command_options).toEqual(commandOptions);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.cart_order_data).toEqual(cartOrderData);
        expect(mockRequestOptions.body.data).toEqual(data);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.log_summary).toEqual(logSummary);
        expect(mockRequestOptions.body.agent).toEqual(agent);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createJobParams = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createJob(createJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteJob', () => {
    describe('positive tests', () => {
      function __deleteJobTest() {
        // Construct the params object for operation deleteJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const force = true;
        const propagate = true;
        const deleteJobParams = {
          jobId,
          refreshToken,
          force,
          propagate,
        };

        const deleteJobResult = schematicsService.deleteJob(deleteJobParams);

        // all methods should return a Promise
        expectToBePromise(deleteJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteJobParams = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteJob(deleteJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getJob', () => {
    describe('positive tests', () => {
      function __getJobTest() {
        // Construct the params object for operation getJob
        const jobId = 'testString';
        const profile = 'summary';
        const getJobParams = {
          jobId,
          profile,
        };

        const getJobResult = schematicsService.getJob(getJobParams);

        // all methods should return a Promise
        expectToBePromise(getJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getJobParams = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getJob(getJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateJob', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // JobStatusWorkitem
      const jobStatusWorkitemModel = {
        workspace_id: 'testString',
        workspace_name: 'testString',
        job_id: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusFlow
      const jobStatusFlowModel = {
        flow_id: 'testString',
        flow_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        workitems: [jobStatusWorkitemModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusTemplate
      const jobStatusTemplateModel = {
        template_id: 'testString',
        template_name: 'testString',
        flow_index: 0,
        status_code: 'job_pending',
        status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusWorkspace
      const jobStatusWorkspaceModel = {
        workspace_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        flow_status: jobStatusFlowModel,
        template_status: [jobStatusTemplateModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusAction
      const jobStatusActionModel = {
        action_name: 'testString',
        status_code: 'job_pending',
        status_message: 'testString',
        bastion_status_code: 'none',
        bastion_status_message: 'testString',
        targets_status_code: 'none',
        targets_status_message: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusSchematicsResources
      const jobStatusSchematicsResourcesModel = {
        status_code: 'job_pending',
        status_message: 'testString',
        schematics_resource_id: 'testString',
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatusSystem
      const jobStatusSystemModel = {
        system_status_message: 'testString',
        system_status_code: 'job_pending',
        schematics_resource_status: [jobStatusSchematicsResourcesModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobStatus
      const jobStatusModel = {
        position_in_queue: 72.5,
        total_in_queue: 72.5,
        workspace_job_status: jobStatusWorkspaceModel,
        action_job_status: jobStatusActionModel,
        system_job_status: jobStatusSystemModel,
        flow_job_status: jobStatusFlowModel,
      };

      // CartOrderData
      const cartOrderDataModel = {
        name: 'testString',
        value: 'testString',
        type: 'testString',
        usage_kind: ['servicetags'],
      };

      // JobDataTemplate
      const jobDataTemplateModel = {
        template_id: 'testString',
        template_name: 'testString',
        flow_index: 0,
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobDataWorkspace
      const jobDataWorkspaceModel = {
        workspace_name: 'testString',
        flow_id: 'testString',
        flow_name: 'testString',
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        template_data: [jobDataTemplateModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // Host
      const hostModel = {
        alias: 'testString',
        name: 'testString',
        credential: credentialVariableDataModel,
        vars: [variableDataModel],
      };

      // Group
      const groupModel = {
        name: 'testString',
        vars: [variableDataModel],
        credentials: credentialVariableDataModel,
        hosts: [hostModel],
      };

      // InventoryView
      const inventoryViewModel = {
        groups: [groupModel],
      };

      // InventoryResourceRecord
      const inventoryResourceRecordModel = {
        name: 'testString',
        description: 'testString',
        location: 'us-south',
        resource_group: 'testString',
        inventories_ini: 'testString',
        resource_queries: ['testString'],
        connection_type: 'testString',
        credentials: [credentialVariableDataModel],
        common_credentials: credentialVariableDataModel,
        bastion: bastionResourceDefinitionModel,
        bastion_credential: credentialVariableDataModel,
        inventory_view: inventoryViewModel,
      };

      // JobDataAction
      const jobDataActionModel = {
        action_name: 'testString',
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        updated_at: '2019-01-01T12:00:00.000Z',
        inventory_record: inventoryResourceRecordModel,
        materialized_inventory: 'testString',
      };

      // JobDataSystem
      const jobDataSystemModel = {
        key_id: 'testString',
        schematics_resource_id: ['testString'],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // GitSource
      const gitSourceModel = {
        computed_git_repo_url: 'testString',
        git_repo_url: 'testString',
        git_token: 'testString',
        git_repo_folder: 'testString',
        git_release: 'testString',
        git_branch: 'testString',
      };

      // CatalogSource
      const catalogSourceModel = {
        catalog_name: 'testString',
        catalog_id: 'testString',
        offering_name: 'testString',
        offering_version: 'testString',
        offering_kind: 'testString',
        offering_target_kind: 'testString',
        offering_id: 'testString',
        offering_version_id: 'testString',
        offering_version_flavour_name: 'testString',
        offering_repo_url: 'testString',
        offering_provisioner_working_directory: 'testString',
        dry_run: true,
        owning_account: 'testString',
        item_icon_url: 'testString',
        item_id: 'testString',
        item_name: 'testString',
        item_readme_url: 'testString',
        item_url: 'testString',
        launch_url: 'testString',
      };

      // ExternalSource
      const externalSourceModel = {
        source_type: 'local',
        git: gitSourceModel,
        catalog: catalogSourceModel,
      };

      // JobDataWorkItemLastJob
      const jobDataWorkItemLastJobModel = {
        command_object: 'workspace',
        command_object_name: 'testString',
        command_object_id: 'testString',
        command_name: 'workspace_plan',
        job_id: 'testString',
        job_status: 'job_pending',
      };

      // JobDataWorkItem
      const jobDataWorkItemModel = {
        command_object_id: 'testString',
        command_object_name: 'testString',
        layers: 'testString',
        source_type: 'local',
        source: externalSourceModel,
        inputs: [variableDataModel],
        outputs: [variableDataModel],
        settings: [variableDataModel],
        last_job: jobDataWorkItemLastJobModel,
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobDataFlow
      const jobDataFlowModel = {
        flow_id: 'testString',
        flow_name: 'testString',
        workitems: [jobDataWorkItemModel],
        updated_at: '2019-01-01T12:00:00.000Z',
      };

      // JobData
      const jobDataModel = {
        job_type: 'repo_download_job',
        workspace_job_data: jobDataWorkspaceModel,
        action_job_data: jobDataActionModel,
        system_job_data: jobDataSystemModel,
        flow_job_data: jobDataFlowModel,
      };

      // JobLogSummaryRepoDownloadJob
      const jobLogSummaryRepoDownloadJobModel = {
      };

      // JobLogSummaryWorkspaceJob
      const jobLogSummaryWorkspaceJobModel = {
      };

      // JobLogSummaryWorkitems
      const jobLogSummaryWorkitemsModel = {
        workspace_id: 'testString',
        job_id: 'testString',
        log_url: 'testString',
      };

      // JobLogSummaryFlowJob
      const jobLogSummaryFlowJobModel = {
        workitems: [jobLogSummaryWorkitemsModel],
      };

      // JobLogSummaryActionJobRecap
      const jobLogSummaryActionJobRecapModel = {
        target: ['testString'],
        ok: 72.5,
        changed: 72.5,
        failed: 72.5,
        skipped: 72.5,
        unreachable: 72.5,
      };

      // JobLogSummaryActionJob
      const jobLogSummaryActionJobModel = {
        recap: jobLogSummaryActionJobRecapModel,
      };

      // JobLogSummarySystemJob
      const jobLogSummarySystemJobModel = {
        success: 72.5,
        failed: 72.5,
      };

      // JobLogSummary
      const jobLogSummaryModel = {
        job_type: 'repo_download_job',
        repo_download_job: jobLogSummaryRepoDownloadJobModel,
        workspace_job: jobLogSummaryWorkspaceJobModel,
        flow_job: jobLogSummaryFlowJobModel,
        action_job: jobLogSummaryActionJobModel,
        system_job: jobLogSummarySystemJobModel,
      };

      // AgentInfo
      const agentInfoModel = {
        id: 'testString',
        name: 'testString',
        assignment_policy_id: 'testString',
      };

      function __updateJobTest() {
        // Construct the params object for operation updateJob
        const jobId = 'testString';
        const refreshToken = 'testString';
        const commandObject = 'action';
        const commandObjectId = 'us-east.ACTION.Example-12a1b212.3287dc42';
        const commandName = 'ansible_playbook_run';
        const commandParameter = 'site.yml';
        const commandOptions = ['testString'];
        const inputs = [variableDataModel];
        const settings = [variableDataModel];
        const tags = ['testString'];
        const location = 'us-south';
        const status = jobStatusModel;
        const cartOrderData = [cartOrderDataModel];
        const data = jobDataModel;
        const bastion = bastionResourceDefinitionModel;
        const logSummary = jobLogSummaryModel;
        const agent = agentInfoModel;
        const updateJobParams = {
          jobId,
          refreshToken,
          commandObject,
          commandObjectId,
          commandName,
          commandParameter,
          commandOptions,
          inputs,
          settings,
          tags,
          location,
          status,
          cartOrderData,
          data,
          bastion,
          logSummary,
          agent,
        };

        const updateJobResult = schematicsService.updateJob(updateJobParams);

        // all methods should return a Promise
        expectToBePromise(updateJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.command_object).toEqual(commandObject);
        expect(mockRequestOptions.body.command_object_id).toEqual(commandObjectId);
        expect(mockRequestOptions.body.command_name).toEqual(commandName);
        expect(mockRequestOptions.body.command_parameter).toEqual(commandParameter);
        expect(mockRequestOptions.body.command_options).toEqual(commandOptions);
        expect(mockRequestOptions.body.inputs).toEqual(inputs);
        expect(mockRequestOptions.body.settings).toEqual(settings);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.status).toEqual(status);
        expect(mockRequestOptions.body.cart_order_data).toEqual(cartOrderData);
        expect(mockRequestOptions.body.data).toEqual(data);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.log_summary).toEqual(logSummary);
        expect(mockRequestOptions.body.agent).toEqual(agent);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateJobParams = {
          jobId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateJob(updateJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listJobLogs', () => {
    describe('positive tests', () => {
      function __listJobLogsTest() {
        // Construct the params object for operation listJobLogs
        const jobId = 'testString';
        const listJobLogsParams = {
          jobId,
        };

        const listJobLogsResult = schematicsService.listJobLogs(listJobLogsParams);

        // all methods should return a Promise
        expectToBePromise(listJobLogsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}/logs', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listJobLogsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listJobLogsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listJobLogsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listJobLogsParams = {
          jobId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listJobLogs(listJobLogsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listJobLogs({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listJobLogs();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getJobFiles', () => {
    describe('positive tests', () => {
      function __getJobFilesTest() {
        // Construct the params object for operation getJobFiles
        const jobId = 'testString';
        const fileType = 'template_repo';
        const getJobFilesParams = {
          jobId,
          fileType,
        };

        const getJobFilesResult = schematicsService.getJobFiles(getJobFilesParams);

        // all methods should return a Promise
        expectToBePromise(getJobFilesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/jobs/{job_id}/files', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.file_type).toEqual(fileType);
        expect(mockRequestOptions.path.job_id).toEqual(jobId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getJobFilesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getJobFilesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getJobFilesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const jobId = 'testString';
        const fileType = 'template_repo';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getJobFilesParams = {
          jobId,
          fileType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getJobFiles(getJobFilesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getJobFiles({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getJobFiles();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createWorkspaceDeletionJob', () => {
    describe('positive tests', () => {
      function __createWorkspaceDeletionJobTest() {
        // Construct the params object for operation createWorkspaceDeletionJob
        const refreshToken = 'testString';
        const job = 'delete';
        const version = 'testString';
        const workspaces = ['us-south.workspace.testWorkspace.a6010c37', 'us-south.workspace.teraformNewupdatedone.72011986', 'us-south.workspace.readterraform.400b427c', 'us-south.workspace.myworkspacesink.49745827', 'us-south.workspace.ReadTerraformTemp.c98c9774', 'us-south.workspace.SampleTest1.2a51c3a1'];
        const createWorkspaceDeletionJobParams = {
          refreshToken,
          job,
          version,
          workspaces,
        };

        const createWorkspaceDeletionJobResult = schematicsService.createWorkspaceDeletionJob(createWorkspaceDeletionJobParams);

        // all methods should return a Promise
        expectToBePromise(createWorkspaceDeletionJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspace_jobs', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.job).toEqual(job);
        expect(mockRequestOptions.body.version).toEqual(version);
        expect(mockRequestOptions.body.workspaces).toEqual(workspaces);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createWorkspaceDeletionJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createWorkspaceDeletionJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createWorkspaceDeletionJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createWorkspaceDeletionJobParams = {
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createWorkspaceDeletionJob(createWorkspaceDeletionJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createWorkspaceDeletionJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createWorkspaceDeletionJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getWorkspaceDeletionJobStatus', () => {
    describe('positive tests', () => {
      function __getWorkspaceDeletionJobStatusTest() {
        // Construct the params object for operation getWorkspaceDeletionJobStatus
        const wjId = 'testString';
        const getWorkspaceDeletionJobStatusParams = {
          wjId,
        };

        const getWorkspaceDeletionJobStatusResult = schematicsService.getWorkspaceDeletionJobStatus(getWorkspaceDeletionJobStatusParams);

        // all methods should return a Promise
        expectToBePromise(getWorkspaceDeletionJobStatusResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v1/workspace_jobs/{wj_id}/status', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.wj_id).toEqual(wjId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getWorkspaceDeletionJobStatusTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getWorkspaceDeletionJobStatusTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getWorkspaceDeletionJobStatusTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const wjId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getWorkspaceDeletionJobStatusParams = {
          wjId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getWorkspaceDeletionJobStatus(getWorkspaceDeletionJobStatusParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceDeletionJobStatus({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getWorkspaceDeletionJobStatus();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listInventories', () => {
    describe('positive tests', () => {
      function __listInventoriesTest() {
        // Construct the params object for operation listInventories
        const offset = 0;
        const limit = 100;
        const sort = 'testString';
        const profile = 'ids';
        const listInventoriesParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listInventoriesResult = schematicsService.listInventories(listInventoriesParams);

        // all methods should return a Promise
        expectToBePromise(listInventoriesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listInventoriesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listInventoriesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listInventoriesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listInventoriesParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listInventories(listInventoriesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listInventories({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createInventory', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // Host
      const hostModel = {
        alias: 'testString',
        name: 'testString',
        credential: credentialVariableDataModel,
        vars: [variableDataModel],
      };

      // Group
      const groupModel = {
        name: 'testString',
        vars: [variableDataModel],
        credentials: credentialVariableDataModel,
        hosts: [hostModel],
      };

      // InventoryView
      const inventoryViewModel = {
        groups: [groupModel],
      };

      function __createInventoryTest() {
        // Construct the params object for operation createInventory
        const name = 'dev-inventoryapidocexample';
        const description = 'My cloud linux inventory';
        const location = 'us-east';
        const resourceGroup = 'Default';
        const connectionType = 'testString';
        const credentials = [credentialVariableDataModel];
        const commonCredentials = credentialVariableDataModel;
        const inventoriesIni = '[windows]\n158.177.7.181';
        const resourceQueries = ['testString'];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const inventoryView = inventoryViewModel;
        const createInventoryParams = {
          name,
          description,
          location,
          resourceGroup,
          connectionType,
          credentials,
          commonCredentials,
          inventoriesIni,
          resourceQueries,
          bastion,
          bastionCredential,
          inventoryView,
        };

        const createInventoryResult = schematicsService.createInventory(createInventoryParams);

        // all methods should return a Promise
        expectToBePromise(createInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.connection_type).toEqual(connectionType);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.common_credentials).toEqual(commonCredentials);
        expect(mockRequestOptions.body.inventories_ini).toEqual(inventoriesIni);
        expect(mockRequestOptions.body.resource_queries).toEqual(resourceQueries);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.inventory_view).toEqual(inventoryView);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createInventoryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createInventory(createInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createInventory({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('deleteInventory', () => {
    describe('positive tests', () => {
      function __deleteInventoryTest() {
        // Construct the params object for operation deleteInventory
        const inventoryId = 'testString';
        const force = true;
        const propagate = true;
        const deleteInventoryParams = {
          inventoryId,
          force,
          propagate,
        };

        const deleteInventoryResult = schematicsService.deleteInventory(deleteInventoryParams);

        // all methods should return a Promise
        expectToBePromise(deleteInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteInventory(deleteInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getInventory', () => {
    describe('positive tests', () => {
      function __getInventoryTest() {
        // Construct the params object for operation getInventory
        const inventoryId = 'testString';
        const profile = 'summary';
        const getInventoryParams = {
          inventoryId,
          profile,
        };

        const getInventoryResult = schematicsService.getInventory(getInventoryParams);

        // all methods should return a Promise
        expectToBePromise(getInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getInventory(getInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceInventory', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // CredentialVariableMetadata
      const credentialVariableMetadataModel = {
        type: 'string',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        immutable: true,
        hidden: true,
        required: true,
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // CredentialVariableData
      const credentialVariableDataModel = {
        name: 'testString',
        value: '-----BEGIN OPENSSH PRIVATE KEY-----\\nXXXXXXXXXXXXX\\n-----END OPENSSH PRIVATE KEY-----\\n',
        redacted: 'testString',
        use_default: true,
        metadata: credentialVariableMetadataModel,
      };

      // BastionResourceDefinition
      const bastionResourceDefinitionModel = {
        name: 'testString',
        host: 'testString',
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'testString',
        value: 'testString',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // Host
      const hostModel = {
        alias: 'testString',
        name: '158.177.7.182',
        credential: credentialVariableDataModel,
        vars: [variableDataModel],
      };

      // Group
      const groupModel = {
        name: 'windows',
        vars: [variableDataModel],
        credentials: credentialVariableDataModel,
        hosts: [hostModel],
      };

      // InventoryView
      const inventoryViewModel = {
        groups: [groupModel],
      };

      function __replaceInventoryTest() {
        // Construct the params object for operation replaceInventory
        const inventoryId = 'testString';
        const name = 'dev-inventoryapidocexample';
        const description = 'My cloud linux inventory';
        const location = 'us-east';
        const resourceGroup = 'Default';
        const connectionType = 'ssh';
        const credentials = [credentialVariableDataModel];
        const commonCredentials = credentialVariableDataModel;
        const inventoriesIni = '[windows]\n158.177.7.182';
        const resourceQueries = ['testString'];
        const bastion = bastionResourceDefinitionModel;
        const bastionCredential = credentialVariableDataModel;
        const inventoryView = inventoryViewModel;
        const replaceInventoryParams = {
          inventoryId,
          name,
          description,
          location,
          resourceGroup,
          connectionType,
          credentials,
          commonCredentials,
          inventoriesIni,
          resourceQueries,
          bastion,
          bastionCredential,
          inventoryView,
        };

        const replaceInventoryResult = schematicsService.replaceInventory(replaceInventoryParams);

        // all methods should return a Promise
        expectToBePromise(replaceInventoryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/inventories/{inventory_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.connection_type).toEqual(connectionType);
        expect(mockRequestOptions.body.credentials).toEqual(credentials);
        expect(mockRequestOptions.body.common_credentials).toEqual(commonCredentials);
        expect(mockRequestOptions.body.inventories_ini).toEqual(inventoriesIni);
        expect(mockRequestOptions.body.resource_queries).toEqual(resourceQueries);
        expect(mockRequestOptions.body.bastion).toEqual(bastion);
        expect(mockRequestOptions.body.bastion_credential).toEqual(bastionCredential);
        expect(mockRequestOptions.body.inventory_view).toEqual(inventoryView);
        expect(mockRequestOptions.path.inventory_id).toEqual(inventoryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceInventoryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceInventoryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceInventoryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const inventoryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceInventoryParams = {
          inventoryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceInventory(replaceInventoryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceInventory({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceInventory();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listResourceQuery', () => {
    describe('positive tests', () => {
      function __listResourceQueryTest() {
        // Construct the params object for operation listResourceQuery
        const offset = 0;
        const limit = 100;
        const sort = 'testString';
        const profile = 'ids';
        const listResourceQueryParams = {
          offset,
          limit,
          sort,
          profile,
        };

        const listResourceQueryResult = schematicsService.listResourceQuery(listResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(listResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listResourceQueryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listResourceQuery(listResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listResourceQuery({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createResourceQuery', () => {
    describe('positive tests', () => {
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
        query_select: ['testString'],
      };

      function __createResourceQueryTest() {
        // Construct the params object for operation createResourceQuery
        const type = 'workspace_resource';
        const name = 'hello';
        const queries = [resourceQueryModel];
        const createResourceQueryParams = {
          type,
          name,
          queries,
        };

        const createResourceQueryResult = schematicsService.createResourceQuery(createResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(createResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.queries).toEqual(queries);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createResourceQueryParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createResourceQuery(createResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.createResourceQuery({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('deleteResourcesQuery', () => {
    describe('positive tests', () => {
      function __deleteResourcesQueryTest() {
        // Construct the params object for operation deleteResourcesQuery
        const queryId = 'testString';
        const force = true;
        const propagate = true;
        const deleteResourcesQueryParams = {
          queryId,
          force,
          propagate,
        };

        const deleteResourcesQueryResult = schematicsService.deleteResourcesQuery(deleteResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(deleteResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'force', force);
        checkUserHeader(createRequestMock, 'propagate', propagate);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteResourcesQuery(deleteResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getResourcesQuery', () => {
    describe('positive tests', () => {
      function __getResourcesQueryTest() {
        // Construct the params object for operation getResourcesQuery
        const queryId = 'testString';
        const getResourcesQueryParams = {
          queryId,
        };

        const getResourcesQueryResult = schematicsService.getResourcesQuery(getResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(getResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getResourcesQuery(getResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('executeResourceQuery', () => {
    describe('positive tests', () => {
      function __executeResourceQueryTest() {
        // Construct the params object for operation executeResourceQuery
        const queryId = 'testString';
        const executeResourceQueryParams = {
          queryId,
        };

        const executeResourceQueryResult = schematicsService.executeResourceQuery(executeResourceQueryParams);

        // all methods should return a Promise
        expectToBePromise(executeResourceQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __executeResourceQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __executeResourceQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __executeResourceQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const executeResourceQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.executeResourceQuery(executeResourceQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.executeResourceQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.executeResourceQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceResourcesQuery', () => {
    describe('positive tests', () => {
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
        query_select: ['testString'],
      };

      function __replaceResourcesQueryTest() {
        // Construct the params object for operation replaceResourcesQuery
        const queryId = 'testString';
        const type = 'workspace_resource';
        const name = 'hello my world';
        const queries = [resourceQueryModel];
        const replaceResourcesQueryParams = {
          queryId,
          type,
          name,
          queries,
        };

        const replaceResourcesQueryResult = schematicsService.replaceResourcesQuery(replaceResourcesQueryParams);

        // all methods should return a Promise
        expectToBePromise(replaceResourcesQueryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/resources_query/{query_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.type).toEqual(type);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.queries).toEqual(queries);
        expect(mockRequestOptions.path.query_id).toEqual(queryId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceResourcesQueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __replaceResourcesQueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __replaceResourcesQueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const queryId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceResourcesQueryParams = {
          queryId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.replaceResourcesQuery(replaceResourcesQueryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.replaceResourcesQuery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.replaceResourcesQuery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listAgentData', () => {
    describe('positive tests', () => {
      function __listAgentDataTest() {
        // Construct the params object for operation listAgentData
        const offset = 0;
        const limit = 100;
        const profile = 'summary';
        const filter = 'all';
        const listAgentDataParams = {
          offset,
          limit,
          profile,
          filter,
        };

        const listAgentDataResult = schematicsService.listAgentData(listAgentDataParams);

        // all methods should return a Promise
        expectToBePromise(listAgentDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.qs.filter).toEqual(filter);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listAgentDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listAgentDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listAgentDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listAgentDataParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listAgentData(listAgentDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listAgentData({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createAgentData', () => {
    describe('positive tests', () => {
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

      // AgentMetadataInfo
      const agentMetadataInfoModel = {
        name: 'purpose',
        value: ['git', 'terraform', 'ansible'],
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'ibmcloud_api_key',
        value: '<api_key of the account where cluster and cos are present>',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // AgentUserState
      const agentUserStateModel = {
        state: 'enable',
      };

      // AgentKPIData
      const agentKpiDataModel = {
        availability_indicator: 'available',
        lifecycle_indicator: 'consistent',
        percent_usage_indicator: 'testString',
        application_indicators: ['testString'],
        infra_indicators: ['testString'],
      };

      function __createAgentDataTest() {
        // Construct the params object for operation createAgentData
        const name = 'AgentName';
        const resourceGroup = 'Default';
        const version = 'v1.0.0';
        const schematicsLocation = 'us-south';
        const agentLocation = 'us-south';
        const agentInfrastructure = agentInfrastructureModel;
        const description = 'Create Agent';
        const tags = ['tag1', 'tag2'];
        const agentMetadata = [agentMetadataInfoModel];
        const agentInputs = [variableDataModel];
        const userState = agentUserStateModel;
        const agentKpi = agentKpiDataModel;
        const createAgentDataParams = {
          name,
          resourceGroup,
          version,
          schematicsLocation,
          agentLocation,
          agentInfrastructure,
          description,
          tags,
          agentMetadata,
          agentInputs,
          userState,
          agentKpi,
        };

        const createAgentDataResult = schematicsService.createAgentData(createAgentDataParams);

        // all methods should return a Promise
        expectToBePromise(createAgentDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.version).toEqual(version);
        expect(mockRequestOptions.body.schematics_location).toEqual(schematicsLocation);
        expect(mockRequestOptions.body.agent_location).toEqual(agentLocation);
        expect(mockRequestOptions.body.agent_infrastructure).toEqual(agentInfrastructure);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.agent_metadata).toEqual(agentMetadata);
        expect(mockRequestOptions.body.agent_inputs).toEqual(agentInputs);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.agent_kpi).toEqual(agentKpi);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createAgentDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createAgentDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createAgentDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const name = 'AgentName';
        const resourceGroup = 'Default';
        const version = 'v1.0.0';
        const schematicsLocation = 'us-south';
        const agentLocation = 'us-south';
        const agentInfrastructure = agentInfrastructureModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createAgentDataParams = {
          name,
          resourceGroup,
          version,
          schematicsLocation,
          agentLocation,
          agentInfrastructure,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createAgentData(createAgentDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createAgentData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createAgentData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteAgentData', () => {
    describe('positive tests', () => {
      function __deleteAgentDataTest() {
        // Construct the params object for operation deleteAgentData
        const agentId = 'testString';
        const force = true;
        const deleteAgentDataParams = {
          agentId,
          force,
        };

        const deleteAgentDataResult = schematicsService.deleteAgentData(deleteAgentDataParams);

        // all methods should return a Promise
        expectToBePromise(deleteAgentDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.force).toEqual(force);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteAgentDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteAgentDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteAgentDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteAgentDataParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAgentData(deleteAgentDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteAgentData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteAgentData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAgentData', () => {
    describe('positive tests', () => {
      function __getAgentDataTest() {
        // Construct the params object for operation getAgentData
        const agentId = 'testString';
        const profile = 'summary';
        const getAgentDataParams = {
          agentId,
          profile,
        };

        const getAgentDataResult = schematicsService.getAgentData(getAgentDataParams);

        // all methods should return a Promise
        expectToBePromise(getAgentDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAgentDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getAgentDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getAgentDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAgentDataParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAgentData(getAgentDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getAgentData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getAgentData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateAgentData', () => {
    describe('positive tests', () => {
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

      // AgentMetadataInfo
      const agentMetadataInfoModel = {
        name: 'purpose',
        value: ['git', 'terraform', 'ansible'],
      };

      // VariableMetadata
      const variableMetadataModel = {
        type: 'boolean',
        aliases: ['testString'],
        description: 'testString',
        cloud_data_type: 'testString',
        default_value: 'testString',
        link_status: 'normal',
        secure: true,
        immutable: true,
        hidden: true,
        required: true,
        options: ['testString'],
        min_value: 0,
        max_value: 0,
        min_length: 0,
        max_length: 0,
        matches: 'testString',
        position: 0,
        group_by: 'testString',
        source: 'testString',
      };

      // VariableData
      const variableDataModel = {
        name: 'ibmcloud_api_key',
        value: '<api_key of the account where cluster and cos are present>',
        use_default: true,
        metadata: variableMetadataModel,
      };

      // AgentUserState
      const agentUserStateModel = {
        state: 'enable',
      };

      // AgentKPIData
      const agentKpiDataModel = {
        availability_indicator: 'available',
        lifecycle_indicator: 'consistent',
        percent_usage_indicator: 'testString',
        application_indicators: ['testString'],
        infra_indicators: ['testString'],
      };

      function __updateAgentDataTest() {
        // Construct the params object for operation updateAgentData
        const agentId = 'testString';
        const name = 'AgentName';
        const resourceGroup = 'Default';
        const version = 'v1.0.0';
        const schematicsLocation = 'us-south';
        const agentLocation = 'us-south';
        const agentInfrastructure = agentInfrastructureModel;
        const description = 'New Description';
        const tags = ['tag1', 'tag2'];
        const agentMetadata = [agentMetadataInfoModel];
        const agentInputs = [variableDataModel];
        const userState = agentUserStateModel;
        const agentKpi = agentKpiDataModel;
        const refreshToken = 'testString';
        const updateAgentDataParams = {
          agentId,
          name,
          resourceGroup,
          version,
          schematicsLocation,
          agentLocation,
          agentInfrastructure,
          description,
          tags,
          agentMetadata,
          agentInputs,
          userState,
          agentKpi,
          refreshToken,
        };

        const updateAgentDataResult = schematicsService.updateAgentData(updateAgentDataParams);

        // all methods should return a Promise
        expectToBePromise(updateAgentDataResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.version).toEqual(version);
        expect(mockRequestOptions.body.schematics_location).toEqual(schematicsLocation);
        expect(mockRequestOptions.body.agent_location).toEqual(agentLocation);
        expect(mockRequestOptions.body.agent_infrastructure).toEqual(agentInfrastructure);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.agent_metadata).toEqual(agentMetadata);
        expect(mockRequestOptions.body.agent_inputs).toEqual(agentInputs);
        expect(mockRequestOptions.body.user_state).toEqual(userState);
        expect(mockRequestOptions.body.agent_kpi).toEqual(agentKpi);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateAgentDataTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateAgentDataTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateAgentDataTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const name = 'AgentName';
        const resourceGroup = 'Default';
        const version = 'v1.0.0';
        const schematicsLocation = 'us-south';
        const agentLocation = 'us-south';
        const agentInfrastructure = agentInfrastructureModel;
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateAgentDataParams = {
          agentId,
          name,
          resourceGroup,
          version,
          schematicsLocation,
          agentLocation,
          agentInfrastructure,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateAgentData(updateAgentDataParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updateAgentData({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updateAgentData();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getAgentVersions', () => {
    describe('positive tests', () => {
      function __getAgentVersionsTest() {
        // Construct the params object for operation getAgentVersions
        const getAgentVersionsParams = {};

        const getAgentVersionsResult = schematicsService.getAgentVersions(getAgentVersionsParams);

        // all methods should return a Promise
        expectToBePromise(getAgentVersionsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/versions', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getAgentVersionsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getAgentVersionsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getAgentVersionsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getAgentVersionsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getAgentVersions(getAgentVersionsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.getAgentVersions({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('prsAgentJob', () => {
    describe('positive tests', () => {
      function __prsAgentJobTest() {
        // Construct the params object for operation prsAgentJob
        const agentId = 'testString';
        const force = true;
        const prsAgentJobParams = {
          agentId,
          force,
        };

        const prsAgentJobResult = schematicsService.prsAgentJob(prsAgentJobParams);

        // all methods should return a Promise
        expectToBePromise(prsAgentJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}/prs', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.force).toEqual(force);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __prsAgentJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __prsAgentJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __prsAgentJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const prsAgentJobParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.prsAgentJob(prsAgentJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.prsAgentJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.prsAgentJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('healthCheckAgentJob', () => {
    describe('positive tests', () => {
      function __healthCheckAgentJobTest() {
        // Construct the params object for operation healthCheckAgentJob
        const agentId = 'testString';
        const force = true;
        const healthCheckAgentJobParams = {
          agentId,
          force,
        };

        const healthCheckAgentJobResult = schematicsService.healthCheckAgentJob(healthCheckAgentJobParams);

        // all methods should return a Promise
        expectToBePromise(healthCheckAgentJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}/health', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.force).toEqual(force);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __healthCheckAgentJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __healthCheckAgentJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __healthCheckAgentJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const healthCheckAgentJobParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.healthCheckAgentJob(healthCheckAgentJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.healthCheckAgentJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.healthCheckAgentJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deployAgentJob', () => {
    describe('positive tests', () => {
      function __deployAgentJobTest() {
        // Construct the params object for operation deployAgentJob
        const agentId = 'testString';
        const force = true;
        const deployAgentJobParams = {
          agentId,
          force,
        };

        const deployAgentJobResult = schematicsService.deployAgentJob(deployAgentJobParams);

        // all methods should return a Promise
        expectToBePromise(deployAgentJobResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}/deploy', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.force).toEqual(force);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deployAgentJobTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deployAgentJobTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deployAgentJobTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deployAgentJobParams = {
          agentId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deployAgentJob(deployAgentJobParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deployAgentJob({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deployAgentJob();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteAgentResources', () => {
    describe('positive tests', () => {
      function __deleteAgentResourcesTest() {
        // Construct the params object for operation deleteAgentResources
        const agentId = 'testString';
        const refreshToken = 'testString';
        const deleteAgentResourcesParams = {
          agentId,
          refreshToken,
        };

        const deleteAgentResourcesResult = schematicsService.deleteAgentResources(deleteAgentResourcesParams);

        // all methods should return a Promise
        expectToBePromise(deleteAgentResourcesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/agents/{agent_id}/resources', 'DELETE');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'refresh_token', refreshToken);
        expect(mockRequestOptions.path.agent_id).toEqual(agentId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteAgentResourcesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deleteAgentResourcesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deleteAgentResourcesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const agentId = 'testString';
        const refreshToken = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteAgentResourcesParams = {
          agentId,
          refreshToken,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deleteAgentResources(deleteAgentResourcesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deleteAgentResources({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deleteAgentResources();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getKmsSettings', () => {
    describe('positive tests', () => {
      function __getKmsSettingsTest() {
        // Construct the params object for operation getKmsSettings
        const location = 'testString';
        const getKmsSettingsParams = {
          location,
        };

        const getKmsSettingsResult = schematicsService.getKmsSettings(getKmsSettingsParams);

        // all methods should return a Promise
        expectToBePromise(getKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.location).toEqual(location);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getKmsSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getKmsSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getKmsSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getKmsSettingsParams = {
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getKmsSettings(getKmsSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getKmsSettings({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getKmsSettings();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updateKmsSettings', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // KMSSettingsPrimaryCrk
      const kmsSettingsPrimaryCrkModel = {
        kms_name: 'Key Protect-xxx',
        kms_private_endpoint: 'https://private.us-south.kms.cloud.ibm.com',
        key_crn: 'crn:v1:public:kms:us-south:a/010101010:key:3a14ceaf-c679-455d-10101010',
      };

      // KMSSettingsSecondaryCrk
      const kmsSettingsSecondaryCrkModel = {
        kms_name: 'testString',
        kms_private_endpoint: 'testString',
        key_crn: 'testString',
      };

      function __updateKmsSettingsTest() {
        // Construct the params object for operation updateKmsSettings
        const location = 'US';
        const encryptionScheme = 'byok';
        const resourceGroup = 'Default';
        const primaryCrk = kmsSettingsPrimaryCrkModel;
        const secondaryCrk = kmsSettingsSecondaryCrkModel;
        const updateKmsSettingsParams = {
          location,
          encryptionScheme,
          resourceGroup,
          primaryCrk,
          secondaryCrk,
        };

        const updateKmsSettingsResult = schematicsService.updateKmsSettings(updateKmsSettingsParams);

        // all methods should return a Promise
        expectToBePromise(updateKmsSettingsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.encryption_scheme).toEqual(encryptionScheme);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.primary_crk).toEqual(primaryCrk);
        expect(mockRequestOptions.body.secondary_crk).toEqual(secondaryCrk);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateKmsSettingsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updateKmsSettingsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updateKmsSettingsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateKmsSettingsParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updateKmsSettings(updateKmsSettingsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.updateKmsSettings({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('listKms', () => {
    describe('positive tests', () => {
      function __listKmsTest() {
        // Construct the params object for operation listKms
        const encryptionScheme = 'testString';
        const location = 'testString';
        const resourceGroup = 'testString';
        const limit = 100;
        const sort = 'testString';
        const listKmsParams = {
          encryptionScheme,
          location,
          resourceGroup,
          limit,
          sort,
        };

        const listKmsResult = schematicsService.listKms(listKmsParams);

        // all methods should return a Promise
        expectToBePromise(listKmsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/kms_instances', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.encryption_scheme).toEqual(encryptionScheme);
        expect(mockRequestOptions.qs.location).toEqual(location);
        expect(mockRequestOptions.qs.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.sort).toEqual(sort);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listKmsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listKmsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listKmsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const encryptionScheme = 'testString';
        const location = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listKmsParams = {
          encryptionScheme,
          location,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listKms(listKmsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.listKms({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.listKms();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listPolicy', () => {
    describe('positive tests', () => {
      function __listPolicyTest() {
        // Construct the params object for operation listPolicy
        const offset = 0;
        const limit = 100;
        const profile = 'summary';
        const listPolicyParams = {
          offset,
          limit,
          profile,
        };

        const listPolicyResult = schematicsService.listPolicy(listPolicyParams);

        // all methods should return a Promise
        expectToBePromise(listPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/policies', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.offset).toEqual(offset);
        expect(mockRequestOptions.qs.limit).toEqual(limit);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __listPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __listPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listPolicyParams = {
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.listPolicy(listPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });

      test('should not have any problems when no parameters are passed in', () => {
        // invoke the method with no parameters
        schematicsService.listPolicy({});
        checkForSuccessfulExecution(createRequestMock);
      });
    });
  });

  describe('createPolicy', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      // PolicyObjectSelector
      const policyObjectSelectorModel = {
        kind: 'workspace',
        tags: ['testString'],
        resource_groups: ['testString'],
        locations: ['us-south'],
      };

      // PolicyObjects
      const policyObjectsModel = {
        selector_kind: 'ids',
        selector_ids: ['testString'],
        selector_scope: [policyObjectSelectorModel],
      };

      // AgentAssignmentPolicyParameter
      const agentAssignmentPolicyParameterModel = {
        selector_kind: 'ids',
        selector_ids: ['testString'],
        selector_scope: [policyObjectSelectorModel],
      };

      // PolicyParameter
      const policyParameterModel = {
        agent_assignment_policy_parameter: agentAssignmentPolicyParameterModel,
      };

      // ScopedResource
      const scopedResourceModel = {
        kind: 'workspace',
        id: 'testString',
      };

      function __createPolicyTest() {
        // Construct the params object for operation createPolicy
        const kind = 'agent_assignment_policy';
        const name = 'new-policy-dev';
        const description = 'Policy for job execution of secured workspaces on agent1';
        const resourceGroup = 'Default';
        const tags = ['policy:secured-job'];
        const location = 'us-south';
        const state = userStateModel;
        const target = policyObjectsModel;
        const parameter = policyParameterModel;
        const scopedResources = [scopedResourceModel];
        const createPolicyParams = {
          kind,
          name,
          description,
          resourceGroup,
          tags,
          location,
          state,
          target,
          parameter,
          scopedResources,
        };

        const createPolicyResult = schematicsService.createPolicy(createPolicyParams);

        // all methods should return a Promise
        expectToBePromise(createPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/policies', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.kind).toEqual(kind);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.state).toEqual(state);
        expect(mockRequestOptions.body.target).toEqual(target);
        expect(mockRequestOptions.body.parameter).toEqual(parameter);
        expect(mockRequestOptions.body.scoped_resources).toEqual(scopedResources);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __createPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __createPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const kind = 'agent_assignment_policy';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPolicyParams = {
          kind,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.createPolicy(createPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.createPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.createPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deletePolicy', () => {
    describe('positive tests', () => {
      function __deletePolicyTest() {
        // Construct the params object for operation deletePolicy
        const policyId = 'testString';
        const deletePolicyParams = {
          policyId,
        };

        const deletePolicyResult = schematicsService.deletePolicy(deletePolicyParams);

        // all methods should return a Promise
        expectToBePromise(deletePolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/policies/{policy_id}', 'DELETE');
        const expectedAccept = undefined;
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.path.policy_id).toEqual(policyId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deletePolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __deletePolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __deletePolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const policyId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deletePolicyParams = {
          policyId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.deletePolicy(deletePolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.deletePolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.deletePolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPolicy', () => {
    describe('positive tests', () => {
      function __getPolicyTest() {
        // Construct the params object for operation getPolicy
        const policyId = 'testString';
        const profile = 'summary';
        const getPolicyParams = {
          policyId,
          profile,
        };

        const getPolicyResult = schematicsService.getPolicy(getPolicyParams);

        // all methods should return a Promise
        expectToBePromise(getPolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/policies/{policy_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.profile).toEqual(profile);
        expect(mockRequestOptions.path.policy_id).toEqual(policyId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __getPolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __getPolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const policyId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPolicyParams = {
          policyId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.getPolicy(getPolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.getPolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.getPolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('updatePolicy', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // UserState
      const userStateModel = {
        state: 'draft',
        set_by: 'testString',
        set_at: '2019-01-01T12:00:00.000Z',
      };

      // PolicyObjectSelector
      const policyObjectSelectorModel = {
        kind: 'workspace',
        tags: ['testString'],
        resource_groups: ['testString'],
        locations: ['us-south'],
      };

      // PolicyObjects
      const policyObjectsModel = {
        selector_kind: 'ids',
        selector_ids: ['testString'],
        selector_scope: [policyObjectSelectorModel],
      };

      // AgentAssignmentPolicyParameter
      const agentAssignmentPolicyParameterModel = {
        selector_kind: 'ids',
        selector_ids: ['testString'],
        selector_scope: [policyObjectSelectorModel],
      };

      // PolicyParameter
      const policyParameterModel = {
        agent_assignment_policy_parameter: agentAssignmentPolicyParameterModel,
      };

      // ScopedResource
      const scopedResourceModel = {
        kind: 'workspace',
        id: 'testString',
      };

      function __updatePolicyTest() {
        // Construct the params object for operation updatePolicy
        const policyId = 'testString';
        const kind = 'agent_assignment_policy';
        const name = 'new-policy-dev';
        const description = 'Policy for job execution of secured workspaces on agent1 updated';
        const resourceGroup = 'Default';
        const tags = ['policy:secured-job'];
        const location = 'us-south';
        const state = userStateModel;
        const target = policyObjectsModel;
        const parameter = policyParameterModel;
        const scopedResources = [scopedResourceModel];
        const updatePolicyParams = {
          policyId,
          kind,
          name,
          description,
          resourceGroup,
          tags,
          location,
          state,
          target,
          parameter,
          scopedResources,
        };

        const updatePolicyResult = schematicsService.updatePolicy(updatePolicyParams);

        // all methods should return a Promise
        expectToBePromise(updatePolicyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/v2/settings/policies/{policy_id}', 'PATCH');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.body.kind).toEqual(kind);
        expect(mockRequestOptions.body.name).toEqual(name);
        expect(mockRequestOptions.body.description).toEqual(description);
        expect(mockRequestOptions.body.resource_group).toEqual(resourceGroup);
        expect(mockRequestOptions.body.tags).toEqual(tags);
        expect(mockRequestOptions.body.location).toEqual(location);
        expect(mockRequestOptions.body.state).toEqual(state);
        expect(mockRequestOptions.body.target).toEqual(target);
        expect(mockRequestOptions.body.parameter).toEqual(parameter);
        expect(mockRequestOptions.body.scoped_resources).toEqual(scopedResources);
        expect(mockRequestOptions.path.policy_id).toEqual(policyId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updatePolicyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        schematicsService.enableRetries();
        __updatePolicyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        schematicsService.disableRetries();
        __updatePolicyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const policyId = 'testString';
        const kind = 'agent_assignment_policy';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updatePolicyParams = {
          policyId,
          kind,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        schematicsService.updatePolicy(updatePolicyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await schematicsService.updatePolicy({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await schematicsService.updatePolicy();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
