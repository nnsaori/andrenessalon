# ANDRENE'S SALON

Hair salon Page


# Requirements
- Node.js v16.4.0  

# Setup

### install nodebrew 

https://github.com/hokaccha/nodebrew

##### Reload config

```
$ source ~/.zshrc 
```

### install node.js

```
$ nodebrew ls-remote
$ nodebrew install-binary vX.X.X // Stable version

$ nodebrew use vX.X.X
$ node -v
vX.X.X
```

```
$ cd ~
$ setfattr -n user.pax.flags -v "mr" $(find $NVM_DIR -type f -iname "node" -o -iname "npm" -o -iname "npx")
```
