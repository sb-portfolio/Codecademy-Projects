const fetchAllButton = document.getElementById('fetch-quotes');
const fetchRandomButton = document.getElementById('fetch-random');
const fetchByAuthorButton = document.getElementById('fetch-by-author');

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.querySelector('.quote');
const attributionText = document.querySelector('.attribution');

const resetQuotes = () => {
  quoteContainer.innerHTML = '';
}

document.addEventListener("click", (event) => {
  const id = event.target.dataset.id
  const editButtonId = event.target.dataset.editid
  const cancelButtonId = event.target.dataset.cancelid
  const saveButtonId = event.target.dataset.saveid

  if(id){

    fetch(`/api/quotes/${id}`, {
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(response => {
      renderQuotes(response.quotes);
    });
  } else if(editButtonId){
    console.log("edit")
    document.getElementById(`quote${editButtonId}`).setAttribute("contenteditable", true);
  } else if(cancelButtonId){
    console.log("cencel")
    document.getElementById(`quote${cancelButtonId}`).setAttribute("contenteditable", false);
  } else if(saveButtonId){

    document.getElementById(`quote${saveButtonId}`).setAttribute("contenteditable", false);
    console.log("fire api")
  }
  
})

const renderError = response => {
  quoteContainer.innerHTML = `<p>Your request returned an error from the server: </p>
<p>Code: ${response.status}</p>
<p>${response.statusText}</p>`;
}

const renderQuotes = (quotes = []) => {
  resetQuotes();
  if (quotes.length > 0) {
    quotes.forEach(quote => {
      const newQuote = document.createElement('div');
      newQuote.className = 'single-quote';
      newQuote.innerHTML = `
      <div class="quote-text" id="quote${quote.id}">${quote.quote}</div>
      <div class="attribution" contentEditable="true">- ${quote.person}</div>
        <button data-editid="${quote.id}">
            Edit
        </button>
        <button data-cancelid="${quote.id}">
            Cancel
        </button>
        <button data-saveid="${quote.id}">
            Save
        </button>
        <button data-id="${quote.id}">
          Delete
        </button>`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = '<p>Your request returned no quotes.</p>';
  }
}

fetchAllButton.addEventListener('click', () => {
  fetch('/api/quotes')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});

fetchRandomButton.addEventListener('click', () => {
  fetch('/api/quotes/random')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes([response.quote]);
  });
});

fetchByAuthorButton.addEventListener('click', () => {
  const author = document.getElementById('author').value;
  fetch(`/api/quotes?person=${author}`)
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      renderError(response);
    }
  })
  .then(response => {
    renderQuotes(response.quotes);
  });
});
