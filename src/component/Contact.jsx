import React from "react"



export default function Contact() {
    return (
        <div >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1 >Have some question ?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-5 d-flex justify-content-center">
                        <img src="assets/contact.jpg" alt="Contact image" height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="john smith" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                             <button type="submit" class="btn btn-outline-primary">Send message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}