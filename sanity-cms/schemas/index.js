import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'
import pet from "./pet"
import testimonials from "./testimonials"



export default createSchema({
   name: "default",
   types: schemaTypes.concat([
      pet,
      testimonials
   ]),
})
