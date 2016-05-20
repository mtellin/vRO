// Return type of Array/string

	var connection = Server.findForType("NSX:Connection","66b811f0-e72c-4802-9600-976692c3f6e0");
	var scopeId = "globalroot-0";
    var allSecurityGroups;
	SecurityGroupNames = [];
	allSecurityGroups = NSXSecurityGroupsManager.getSecurityGroupsByScope(connection, scopeId);
	for each (sg in allSecurityGroups) {
		SecurityGroupNames.push(sg.name);
		}
	return SecurityGroupNames;
