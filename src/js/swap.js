// swapping a string for another string

const sToRemPlugin = () => {
	  return (root) => {
	    root.walkDecls((decl) => {
	      // Regular expression to match the specified pattern: space, integers, 's;'
	      // This regex is cautious not to match other CSS units
	      const regex = /(\s)(\d+)s;/g

	      // Function to replace found patterns with their `rem` equivalent
	      const replaceFunc = (match, p1, p2) => `${p1}${p2 * 0.0625}rem;`

	      // Replace in declaration values
	      if (regex.test(decl.value)) {
	        decl.value = decl.value.replace(regex, replaceFunc)
	      }

	      // Also consider replacing in declaration properties if needed
	      if (regex.test(decl.prop)) {
	        decl.prop = decl.prop.replace(regex, replaceFunc)
	      }
	    })
	  }
}
module.exports = sToRemPlugin
