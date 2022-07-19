import React, { useState, useEffect } from "react";
import TutorialDataService from "../services/tutorial.service";
import { useParams } from "react-router-dom";
import ReactDOM from 'react-dom';

  const Tutorial1=()=>{
    let { id } = useParams(); 
    console.log(id);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [published, setPublished] = useState(false);
    const [updatePublished1, setUpdatePublish] = useState(false);
    const [updateTutorial1, setUpdateTutorial] = useState(false);
    const [deleteTutorial1, setDeleteTutorial] = useState(false);

    function getTutorial() {
      console.log("tutorial");
      TutorialDataService.get(id)
        .then(response => {
          setTitle(response.data.title);
          setDescription(response.data.description);
          setPublished(response.data.published);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  /* 
    useEffect(() => {
      console.log(`/something/${id}`);
  },[]);
   */

  getTutorial();

  const handleChangeTitle = (event1) => {
    setTitle(event1.target.value);
    console.log(title)
  }

  const handleChangeDescription = (event1) => {
    setDescription(event1.target.value);
  }

  function updatePublished(status) {
    var data = {
      id: id,
      title: title,
      description: description,
      published: status
    };
    console.log(data);

    TutorialDataService.update(id, data)
      .then(response => {
          setPublished(status);
          console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function deleteTutorial() {    
    TutorialDataService.delete(id)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  function updateTutorial() {
    console.log("update");
    var data = {
      id: id,
      title: title,
      description: description,
      published: published
    };
    console.log(data);
    TutorialDataService.update(
      id,
      data
    )
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

    return (
      <div>
      <div className="edit-form">
      <h4>Tutorial</h4>

      <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={title}
                  onChange={handleChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={description}
                  onChange={handleChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {published ? "Published" : "Pending"}
              </div>
            </form>

            {published ? (
              <button
                onClick={() => updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                onClick={() => updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              onClick={deleteTutorial}
            >
              Delete
            </button>

            <button
              type="submit"

              onClick={updateTutorial}
            >
              Update
            </button>

      </div>
      </div>
    );
  
};
  
export default Tutorial1;
