import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Form = props =>{
    const handleSubmit = e => {
        e.preventDefault();
        //Do other things later
    }
    return(
        <form onSubmit={handleSubmit} className="container text-left">
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="image">Product Image</label>
                <input type="text" name="image" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="price">Price</label>
                <input type="text" name="price" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <input type="text" name="category" className="form-control" />
            </div>
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" className="form-control" />
            </div>
            <input type="submit" value="Submit" className="btn btn-primary" />
        </form>
    );
}

export default Form;