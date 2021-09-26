import React from 'react'

export default function Demo() {
  // useState返回值为数组，第一个值为state，第二个值为修改数组的方法
  const [count,setCount] = React.useState(0)
  React.useEffect(()=>{
    console.log('@');
  })
  function add(params) {
    // 第一种写法
    // setCount(count+1)
    // 第二种写法
    setCount((count)=>{
      return count + 1
    })
  }
  return (
    <div>
      <h2>当前求和为：{count}</h2>
      <button onClick={add}>+1</button>
    </div>
  )
}
