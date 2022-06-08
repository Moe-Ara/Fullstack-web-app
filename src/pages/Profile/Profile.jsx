import React, { useEffect, useState } from 'react'
import { Icon } from './../../Reusables/Icon/Icon'
import { Button } from './../../Reusables/Button/Button'
import './profile.css'
import { IconText } from '../../Reusables/IconText/IconText'
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
// import { Barchart } from '../../Components/Chart/Barchart'

const Profile = () => {
  const [user, setUser] = useState({
    'Username': 'Mohamad',
    'Email': 'mohamadarabi@web.de',
    'UID': ''
  });
  function getUserData() {

  }
  const dropDownMenu = () => {

  }
  const [charDat, setCharDat] = useState({
    labels: ['C/C++', 'Dart', 'Java',
      'Python', 'Assembly', 'C#'],
    datasets: [
      {
        label: 'Number of Projects on github',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(148, 0, 76, 0.8)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [9, 5, 8, 3, 0, 3]
      }
    ]
  });
  
const doughnutdata = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
const doughnutdata2 = {
  labels: ['example', 'example', 'example', 'example'],
  datasets: [
    {
      label: 'example',
      data: [3, 10,  3, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(148, 0, 76, 0.5)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
  return (
    <>
      <video src='/videos/hero.mp4' autoplay="true" loop="true" muted="true" /> 
      <div className='grid-container'>
        <div className='grid-item-1'>
          <div className='avatar-information'>
            <Icon className='icon' src='./Images/avatar.png' size='icon--large'></Icon>
            <h2>{user.Username}</h2>
            <p>Occupation<br />Location</p>
            <Button className='btn' buttonSize='btn--large' buttonStyle='btn--primary'>Follow</Button>
            <Button className='btn' buttonSize='btn--large' buttonStyle='btn--primary'>Contact</Button>
          </div>
        </div>
        <div className='grid-item-2'>
          <div className='contact-information'>
            <IconText iClass="fa fa-github" text="https://www.github.com/example" subtext="" />
            <IconText iClass="fa fa-facebook" text="https://www.facebook.com/example" subtext="" />
            <IconText iClass="fa fa-instagram" text="https://www.instagram.com/example" subtext="" />
            <IconText iClass="fa fa-linkedin-square" text="https://www.linkedin.com/example" subtext="" />
          </div>
        </div>
        <div className='grid-item-3'>
          <div className='personal-information'>
            <ul>
              <li><h2>First Name</h2> <p>First Name Example</p></li>
              <li><h2>Last Name</h2> <p>Last Name Example</p></li>
              <li><h2>Username</h2> <p>{user.Username}</p> </li>
              <li><h2>E-mail</h2> <p>{user.Email}</p> </li>
              <li><h2>Phone</h2> <p>+49 1573-xxxxxxx</p> </li>
              <li><h2>Address</h2> <p>Adress Example</p> </li>
            </ul>
          </div>
        </div>
        <div className='grid-item-4'>
          <div className='skills-information'>
          <Bar className='barchart'
          data={charDat}
          options={{
            title: {
              display: true,
              text: "Number of Projects on github in different languages",
              fontSize: 20
            },
            legend: {
              display: true, //Is the legend shown?
              position: "right" //Position of the legend.
            }
          }}
        />
          </div>
        </div>
        <div className='grid-item-5'>
          <div className='education-information'>
            <Doughnut className='chart' data={doughnutdata}/>
            <Doughnut className='chart' data={doughnutdata2}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile