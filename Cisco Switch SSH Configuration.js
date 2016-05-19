session = new SSHSession(hostName, username, port);
session.connectWithPassword(password);

session.executeCommand("echo `date` >> /tmp/date1.txt", true);
output = session.getOutput();
System.log("Output: '" + output + "'");
session.executeCommand("echo `date` >> /tmp/date2.txt", true);
