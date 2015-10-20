import tsUnit = require( './tsUnit');
import sidebar = require('./sidebar.controller');

export class SimpleTests extends tsUnit.TestClass {                 
    test1() {     
        var location = <ng.ILocationService>{};                                 
        var controller = new sidebar.SidebarController(location);
        var result = controller.isActive('/dashboard')

        this.areIdentical(true, result);
    }
}