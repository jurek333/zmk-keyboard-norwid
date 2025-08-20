%Echo off
setlocal EnableDelayedExpansion

call ergogen .
for %%x in (output\cases\*.jscad) do npx @jscad/cli@1 %%x -of stla