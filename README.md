Adds a resolve(path) method to the Module prototype.

Node.js has a pretty powerful and intuitive resource path resolution algorithm, which is useful for other things besides source files.  To use it for looking-up other files, we need to be able to lookup relative to the module from which the file is being sought.  This patches in that functionality using private methods of the Module object, so it's not an ideal solution.

A better solution would be for node.js to integrate this method.  Even better would be if it provided a async implementation as well.

See [bug 3285](https://github.com/joyent/node/issues/3285).
