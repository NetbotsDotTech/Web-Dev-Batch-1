import React, { useState } from 'react'
import './dropselect.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { ClickAwayListener } from '@mui/material'


const SelectDropdown = ({data,placeholder,icon}) => {
  const [isOpen,setIsOpen]=useState(false)
  const [selectIndex,setSelectIndex]=useState(0)
  const [selectItem,setSelectItem]=useState(placeholder)
  const [listData,setListData]=useState(data)
  const [listData2,setListData2]=useState(data)


  const openSelect=()=>{
    setIsOpen(!isOpen)
  }
  const closeSelect=(index,name)=>{
    setSelectIndex(index)
    setIsOpen(false)
    setSelectItem(name)

  }
  const filterlist=(e)=>{
    const keyword=e.target.varlue.toLowerCase();
  const list=listData2.filter((item)=>{
    return item.toLowerCase().include(keyword);
  })
  setListData(list)
  console.log(list)

  }
  return (
   <ClickAwayListener onClickAway={()=>setIsOpen(false)}>
     <div className="selectDrop cursor">
     {icon}
     <span className='openSelect' onClick={openSelect}>{selectItem} <KeyboardArrowDownIcon className='arrow cursor'/> </span>
     {
      isOpen===true &&
      <div className='dropDown'>
      <div className="searchfield">
        <input type="text" placeholder='Search here..' onChange={filterlist}/>
      
      </div>
      <ul className='searchresult'>
      <li onClick={()=>closeSelect(0,item)} className={`${selectIndex===0 ? 'active':''}`}>{placeholder}</li>

        {
          listData.map((item,index)=>{
            return(
              <li onClick={()=>closeSelect(index+1,item)} className={`${selectIndex===index+1 ? 'active':''}`}>{item}</li>

            )
          })
        }          
        </ul>

    </div>
     }
   

    </div>
   </ClickAwayListener>

  )
}

export default SelectDropdown
