import React from 'react';
import axios from 'axios';

class Menu extends React.Component {
   constructor(props) {
   super(props);
       this.state = {
           categories: [],
           categoryname:this.props.match.params.id,
           categoryItems:[]
       };
       this.getCategories = this.getCategories.bind(this);
       this.getCategoryItems = this.getCategoryItems.bind(this);
       this.getDetail=this.getDetail.bind(this);
   }
   componentDidMount() {
       this.getCategories();
       this.getCategoryItems();
   }
   getCategories() {
       axios.get('https://davids-restaurant.herokuapp.com/categories.json')
       .then(response => {
           this.setState({categories: response.data})})
   }
   getCategoryItems() {

           axios.get('https://davids-restaurant.herokuapp.com/menu_items.json?category='+this.state.categoryname)
           .then(response => {
             this.setState({categoryItems: response.data})})
 }
   getDetail(category){
       this.setState({
           categoryname: category.short_name
       })
       this.getCategoryItems();
   }

  render() {



     return (

        <div>

           <div>Menu Categories</div>
           <ul>
           {
             this.state.categories.map(category =><li><a onClick={this.getDetail.bind(null, category)}  href={'#/'+category.short_name}>{category.name}</a></li>)}
           </ul>

               <div style={{marginTop:"-28%",marginLeft:"25%"}}>
               <h2>Item in category: ({this.state.categoryItems.menu_items && this.state.categoryItems.menu_items.length>0 ?this.state.categoryItems.category.short_name : ""})</h2>
               <table border="1">
               <thead>


                       <tr><td>Name</td><td>Description</td></tr>
                   </thead>
                   <tbody>
                       {
                       this.state.categoryItems.menu_items && this.state.categoryItems.menu_items.length>0 ?
                       this.state.categoryItems.menu_items.map(categoryItem => <tr>
                           <td>{categoryItem.name}</td>
                           <td>{categoryItem.description}</td>
                       </tr>)
                       : null
                       }
                   </tbody>
               </table>
               </div>
        </div>
     );
  }
}
export default Menu;
