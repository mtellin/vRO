var allVMs;
allVMs = VcPlugin.getAllVirtualMachines();
vmList = [];

for each (vm in allVMs) {
	// Only if the VM Name returned matches what came through as an input will we get the moRef for it
	if (vm.name == vmMorefs) {
		// Stores the moRef (eg vm-120) for JUST the VM on the input and is used at the bottom for the Security Group command
		vmList.push(vm.id)
	}
}

var connection = Server.findForType("NSX:Connection","66b811f0-e72c-4802-9600-976692c3f6e0");
var scopeId = "globalroot-0";
var allSecurityGroups;
SecurityGroupNames = [];
allSecurityGroups = NSXSecurityGroupsManager.getSecurityGroupsByScope(connection, scopeId);
for each (sg in allSecurityGroups) {
	if (sg.name == securityGroupId) {
		SecurityGroupNames.push(sg.id);
	}
}

// Returns the NSX Connection GUID/Security Group so need to truncate before the /, had to escape it out in the RegEx
SecurityGroupNames = /\/(.+)/.exec(SecurityGroupNames)[1];

NSXSecurityGroupsManager.updateSecurityGroup(connection, SecurityGroupNames, vmList, null);
