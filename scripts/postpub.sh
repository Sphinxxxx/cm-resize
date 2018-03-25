# https://gist.github.com/DarrenN/8c6a5b969481725a4413#gistcomment-2089309
PACKAGE_VERSION=$(node -p "require('./package.json').version")


# https://stackoverflow.com/questions/18544359/how-to-read-user-input-into-a-variable-in-bash
read -p "Push to git? Enter commit message (leave blank to cancel): " commit

# https://stackoverflow.com/questions/6482377/check-existence-of-input-argument-in-a-bash-shell-script
if [ ! -z "$commit" ]
  then
    # echo "$commit"
    git add -A
    git commit -am "$commit"
    git push

    echo "Now, create a GitHub release for v$PACKAGE_VERSION :)"
fi
