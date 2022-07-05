#
# this file is called after the build command
#

# create a relativ symbolic link to index-file
ln -sr build/index.html build/404.html
# or
# copying the index-file
#cp build/index.html build/404.html
