# react-use-stylesheet-hook

Example:

import useStylesheet from 'react-use-stylesheet-hook'
```
function MyComponenet(){
  useStyleSheet('body {background-color:red;}')
}
```
Everytime the component will be mounted the body background will be changed to red.
On unmount the color will be back to normal.