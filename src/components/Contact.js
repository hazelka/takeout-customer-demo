import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="ls-4">Contact Us</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input name="name" type="text" placeholder="Name" required />
        <br/>
        <input 
          name="phone" 
          type="tel" 
          placeholder="Phone" 
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          onInvalid={e => e.target.setCustomValidity(
            'Please enter phone format in XXX-XXX-XXXX'
          )}
          onInput={e => e.target.setCustomValidity('')}
          required 
        />
        <br/>
        <input name="email" type="email" placeholder="Email" required />
        <br/>
        <input 
          name="message"
          type="text" 
          placeholder="Message / Special requirements"
        />
        <br/>
        <button type="submit">SEND MESSAGE</button>
      </form>
    </section>
  );
};

/**
 * For demonstration of the front end design to be hosted on github public
 * repository, sensitive information is removed. Replace with WebSocket Server 
 * URL in production.
 */
const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const formJSON = {};
  formData.forEach((value, key) => formJSON[key] = value);
  formJSON.type = 'message';

  event.target.reset();

  alert('In production, the following message will be sent to the server through WebSocket:\n' + 
      JSON.stringify(formJSON));

  // const ws = new WebSocket(/* replace with WebSocket Server URL for production */);
  
  // ws.onopen = () => {
  //   console.log('Connection established. Sending message over...');
  //   ws.send(JSON.stringify(formJSON));
  // }

  // ws.onmessage = (event) => {
  //   if (event.data === 'received') {
  //     alert('Your message is sent!');
  //     console.log('Your message is sent!');
  //     ws.close();
  //   } else {
  //     console.log(event.data); 
  //   }
  // }
}

export default Contact;