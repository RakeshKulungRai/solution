import React from 'react'
import {BiLogoGmail} from 'react-icons/bi'
function Dashboard() {
  return (
    <div>

      <div className="break-words	p-32 " >


        <div>Learn somthing about</div>
        <details>
          <summary>Javascript</summary>
          <p><abbr title="Javascript">JS</abbr> is a versatile and widely used programming language primarily focused on building interactive and
            dynamic functionality for web pages. It is often employed to create client-side scripts that run in web browsers,
            allowing developers to enhance user experiences, validate inputs, and manipulate the Document Object Model (DOM) to
            update content without requiring a full page reload. JavaScript is also utilized on the server-side through
            technologies like Node.js to build scalable and efficient network applications. Its syntax is similar to other
            programming languages, making it relatively accessible to those with programming experience, while its integration
            with HTML and CSS empowers developers to create powerful, interactive web applications.</p>
        </details>
        <details>
          <summary>React</summary>
          <p>React is an open-source JavaScript library used for building user interfaces, particularly for single-page
            applications and mobile applications. Developed by Facebook, React was designed with the goal of simplifying
            the process of creating dynamic, responsive, and efficient user interfaces.</p>
          <details>
            <summary>Key features of react </summary>
            <p>
              <strong className='block'>Component-Based Architecture: </strong>
              React breaks down the user interface into reusable components. These components can be thought of as building blocks
              that encapsulate their own logic, styling, and behavior. This promotes modular development and makes it easier to manage
              and maintain complex UIs.

              <strong className='block'>Virtual DOM:</strong> React introduces a virtual representation of the actual DOM, known as the Virtual DOM.
              When changes occur in a React component, a virtual representation of the updated DOM is created. React then compares
              this virtual DOM with the actual DOM, identifying the minimal set of changes needed to update the UI efficiently.
              This process reduces the need for direct manipulation of the real DOM, resulting in improved performance.

              <strong className='block'>Declarative Syntax:</strong> React uses a declarative approach to building UIs. Developers describe how
              the UI should look based on the current state, and React takes care of updating the actual DOM to match the desired
              state. This is in contrast to imperative programming, where developers would explicitly define the steps to take
              to achieve a particular UI state.

              <strong className='block'>Component Lifecycle and Hooks:</strong> React components have a lifecycle, which defines the sequence
              of events a component goes through from creation to destruction. React also introduced Hooks, which allow
              developers to add state and other React features to functional components without needing to convert them
              into class components.

              <strong className='block'>One-Way Data Binding:</strong> React enforces a unidirectional data flow. Data flows from parent
              components to child components, preventing unexpected side effects and making the application more predictable.

              <strong className='block'>JSX (JavaScript XML):</strong> JSX is a syntax extension for JavaScript that allows developers to write HTML-like code within their JavaScript code. This makes it easier to describe the structure of the UI components.</p>
          </details>
        </details>

      </div>
      <fieldset className='border border-solid border-gray-300 p-3 m-12'>
        <legend className='text-center'>Contact </legend>

        <address className=' grid justify-items-stretch'>
        <div>
         <span className=' flex'><a href="mailto:rakeshkulungrai100@gmail.com" className=' flex'>Email <BiLogoGmail className=' mt-1 ml-2' /> </a></span>
          Visit us at:<br />
          Solution Pvt LTD<br />
          Box 564, Lalitpur<br />
          Nepal
          </div>
        </address>
      </fieldset>
    </div>
  )
}

export default Dashboard