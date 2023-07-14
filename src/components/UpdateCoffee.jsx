import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData()
    const { _id, name, quantity, supplier, taste, details, category, photo } = coffee;
    
    const handleUpdateCoffee = e=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const category = form.category.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,details,category,photo}
        console.log(updatedCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`,{
            method:"PUT",
            headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(updatedCoffee)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'success!',
                    text: 'Coffee Updated a successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            form.reset()
            }
        })
    }


    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl text-black font-extrabold">Update coffee: {name}</h2>
        <form onSubmit={handleUpdateCoffee}>
            {/* name and quantities form name  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        defaultValue={name}
                       name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available quantities </span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="quantity"
                        defaultValue={quantity}
                        placeholder="Available quantities" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* supplier form name  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                       name="supplier" 
                       defaultValue={supplier}placeholder="Supplier Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="taste"
                        defaultValue={taste}
                        placeholder="Taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* category and details form name  */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                       name="category" 
                       defaultValue={category}placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details </span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        name="details"
                        defaultValue={details}
                        placeholder="details" className="input input-bordered w-full" />
                    </label>
                </div>             
            </div>
            {/*form photo and details form name  */}
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                       name="photo" 
                       defaultValue={photo}
                       placeholder="Photo Url" className="input input-bordered w-full" />
                    </label>
                </div>           
            </div>
            <input className="btn btn-block" type="submit"  value="Update Coffee" />
        </form>
    </div>
    );
};

export default UpdateCoffee;