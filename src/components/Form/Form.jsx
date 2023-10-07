import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';

const Form = () => {
  nameInputId = nanoid();

  // state
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    setName({
      [name]: value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.onAddContact({ ...name, ...number });
    resetForm();

    // const newContact = { name: this.state.name, number: this.state.number };
    // this.props.onAddContact = {
    //   name: this.state.name,
    //   number: this.state.number,
    // };
  };

  const resetForm = () => {
    setName({ name: '' });
    setNumber({ number: '' });
  };

  return (
    <form onSubmit={handleSubmit()} className={styles.FormWrapper}>
      <label className={styles.FormLabel}>
        Name
        <input
          type="text"
          name="name"
          // id={this.nameInputId}
          value={name}
          onChange={handleChange()}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          className={styles.FormInput}
          placeholder="Enter name"
        />
      </label>

      <label className={styles.FormLabel}>
        Number
        <input
          type="tel"
          name="number"
          // id={this.nameInputId}
          value={number}
          onChange={handleChange()}
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          required
          className={styles.FormInput}
          placeholder="xxx-xxx-xxx-xxx"
        />
      </label>

      <button className={styles.ButtonForm} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;

// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import styles from './Form.module.css';
// // import PropTypes from 'prop-types';

// class Form extends Component {
//   nameInputId = nanoid();

//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onAddContact({ ...this.state });
//     this.resetForm();

//     // const newContact = { name: this.state.name, number: this.state.number };
//     // this.props.onAddContact = {
//     //   name: this.state.name,
//     //   number: this.state.number,
//     // };
//   };

//   resetForm = () => {
//     this.setState({ name: '', number: '' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={styles.FormWrapper}>
//         <label className={styles.FormLabel}>
//           Name
//           <input
//             type="text"
//             name="name"

//             value={this.state.name}
//             onChange={this.handleChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             required
//             className={styles.FormInput}
//             placeholder="Enter name"
//           />
//         </label>

//         <label className={styles.FormLabel}>
//           Number
//           <input
//             type="tel"
//             name="number"

//             value={this.state.number}
//             onChange={this.handleChange}
//             pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
//             required
//             className={styles.FormInput}
//             placeholder="xxx-xxx-xxx-xxx"
//           />
//         </label>

//         <button className={styles.ButtonForm} type="submit">
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// // Form.propTypes = {
// //   onAddContact: PropTypes.function.isRequired,
// //   name: PropTypes.string.isRequired,
// //   number: PropTypes.string.isRequired,
// // };

// export default Form;
