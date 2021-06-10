/**
 * @description       : 
 * @author            : Amit Singh
 * @group             : 
 * @last modified on  : 12-25-2020
 * @last modified by  : Amit Singh
 * Modifications Log 
 * Ver   Date         Author       Modification
 * 1.0   12-25-2020   Amit Singh   Initial Version
**/
import { LightningElement } from 'lwc';
import hasViewSetup from '@salesforce/userPermission/ViewSetup';
import hasEmailSingle from '@salesforce/userPermission/EmailSingle';
import hasViewAllData from '@salesforce/userPermission/ViewAllData';
import hasModifyAllData from '@salesforce/userPermission/ModifyAllData';
//import hasPermission from '@salesforce/customPermission/PermissionName';
export default class SharedCssDemo extends LightningElement {

    get disableSendBtn() {
        return !hasViewSetup;
    }
    get disableSendEmailBtn() {
        return !hasEmailSingle;
    }
    get disableViewAllBtn() {
        return hasViewAllData;
    }
    get disableModifyAllBtn() {
        return hasModifyAllData;
    }
}
