import React, { useState } from 'react'

const CheckAll = ()=>{
    const {AllCompleted} = useState("")
    return(     
<label> <input type="checkbox"  /> 
      全て{AllCompleted ? "未完了":"完了"}にする 
      </label>
      )
     
}
/*const handleChange = () =>{const {onChange,allCompleted} = useState
onChange=(!allCompleted)
}*/
export default CheckAll

/*分からないこと
5行目AllCompletedの受け渡しの仕方、定義が正しいかどうか
6行目inputタグ→typの後にchecked={AllCompleted}にするとチェックが外れない。また、そのあとonChange={handleChange}にするとエラー。
7行目三項演算子が効かない→すべてチェックがつくと、「すべて未完成にする」それ以外は「すべて完成にする」と表示を変えたい
*/