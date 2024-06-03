import { type IMenuItem, type IMobileType } from "@/types/menu-d-type";

export const menu_data:IMenuItem[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/shop',
    title:'Shop',
    drop_down:true,
    drop_down_type:'shop',
    attr_id:'shop'
  },
  // {
  //   id:3,
  //   link:'/services',
  //   title:'Services',
  // },
  // {
  //   id:4,
  //   link:'/value-your-trade',
  //   title:'Value your trade',
  // },
  {
    id:5,
    link:'/finance',
    title:'Finance',
  },
  // {
  //   id:6,
  //   link:'/company',
  //   title:'Company',
  //   drop_down:true,
  //   drop_down_type:'default',
  //   attr_id:'company'
  // },
  // {
  //   id:7,
  //   link:'/news',
  //   title:'News',
  // },
]

// mobile menu data
export const mobile_menu:IMobileType[] = [
  {
    id:1,
    link:'/',
    title:'Home',
  },
  {
    id:2,
    link:'/shop',
    title:'Shop',
    drop_down:true,
    drop_down_type:'shop',
    attr_id:'shop'
  },
  // {
  //   id:3,
  //   link:'/services',
  //   title:'Services',
  // },
  // {
  //   id:4,
  //   link:'/value-your-trade',
  //   title:'Value your trade',
  // },
  {
    id:5,
    link:'/finance',
    title:'Finance',
  },
  // {
  //   id:6,
  //   link:'/company',
  //   title:'Company',
  //   drop_down:true,
  //   drop_down_type:'default',
  //   attr_id:'company'
  // },
  // {
  //   id:7,
  //   link:'/news',
  //   title:'News',
  // },
]