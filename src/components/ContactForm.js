import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import React from 'react'

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { name: '', email: '', message: '' }
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state })
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error))

    e.preventDefault()
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    const { name, email, message } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Your Name"
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Your Email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="message"
              label="Message"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              name="message"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid container justify="flex-end">
            <Grid item sm={6}>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                size="large"
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default ContactForm