import React, { Component } from 'react'
import Serie from './Serie'

class LaSeries extends Component {
  render() {
    return (
        <section className="row cards all-series" id="series">
            <Serie/>
            <Serie/>
            <Serie/>
            <Serie/>
        </section>
    )
  }
}

export default LaSeries;
