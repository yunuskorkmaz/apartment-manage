workflow "Build" {
  resolves = ["Borales/actions-yarn@master", "Setup Dotnet for use with actions"]
  on = "pull_request"
}

action "Borales/actions-yarn@master" {
  uses = "Borales/actions-yarn@master"
  args = "--cwd ./client run only-build"
}

action "Setup Dotnet for use with actions" {
  uses = "actions/setup-dotnet@a2db70294c800f14593a400f4a1dc16ff5a73a36"
  args = "dotnet build --configuration Release"
}
