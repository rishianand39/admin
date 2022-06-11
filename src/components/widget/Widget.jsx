import "./widget.scss"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { BalanceOutlined, MonetizationOnOutlined, ShoppingBagOutlined } from "@mui/icons-material";

const Widget = ({type}) => {

  const amount=100;
 

  let data;
  switch(type){
    case "user":
      data={
        title:"USERS",
        isMoney:false,
        link:"See all users",
        icon:<PersonOutlineOutlinedIcon className="icon" style={{color:"crimson", background:"#2563"}}/>
      }
      break;
    case "order":
      data={
        title:"ORDERS",
        isMoney:false,
        link:"view all orders",
        icon:<ShoppingBagOutlined className="icon" style={{color:"goldenrod", background:"#adc16f33"}}/>
      } 
      break;
    case "earning":
      data={
        title:"EARNINGS",
        isMoney:true,
        link:"niew net earnings",
        icon:<MonetizationOnOutlined className="icon" style={{color:"green", background:"#5f855b33"}}/>
      }
      break;  
    case "balance":
      data={
        title:"BALANCE",
        isMoney:true,
        link:"See detail",
        icon:<BalanceOutlined className="icon" style={{color:"#19012353", background:"#9e991d"}}/>
      }
      break; 
    default:
      break          
     
  }
  return (
    <div className="widget">
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"} {amount}</span>
          <span className="link">{data.link}</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpOutlinedIcon />
            20%
          </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget