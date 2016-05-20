var allVMs;
allVMs = VcPlugin.getAllVirtualMachines();
vmList = [];
for each (vm in allVMs) {
	vmList.push(vm.name)
}
return vmList;
