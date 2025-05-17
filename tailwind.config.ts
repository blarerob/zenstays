module.exports = {
		  theme: {
		    extend: {
		      animation: {
		        fadeIn: "fadeIn 1s ease-in-out",
		        slideInLeft: "slideInLeft 1s ease-in-out",
		        slideInRight: "slideInRight 1s ease-in-out",
		        zoomIn: "zoomIn 1s ease-in-out",
		      },
		      keyframes: {
		        fadeIn: {
		          "0%": { opacity: 0 },
		          "100%": { opacity: 1 },
		        },
		        slideInLeft: {
		          "0%": { transform: "translateX(-100%)", opacity: 0 },
		          "100%": { transform: "translateX(0)", opacity: 1 },
		        },
		        slideInRight: {
		          "0%": { transform: "translateX(100%)", opacity: 0 },
		          "100%": { transform: "translateX(0)", opacity: 1 },
		        },
		        zoomIn: {
		          "0%": { transform: "scale(0.8)", opacity: 0 },
		          "100%": { transform: "scale(1)", opacity: 1 },
		        },
		      },
		    },
		  },
		};