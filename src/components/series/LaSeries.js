import React, { Component } from 'react'
import Serie from './Serie'

class LaSeries extends Component {
  render() {
    return (
        <section class="row cards all-series" id="series">
            <Serie/>
        </section>
    )
  }
}

export default LaSeries;
