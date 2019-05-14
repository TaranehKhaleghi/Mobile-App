
function TKDoValidate_frmAdd(){
    var form = $("#TKAddForm");
    form.validate({
        rules:{
            TKTypeAdd:{
                required: true
                // candidateCheck: true
            },
            TKStudentNum:{
                required: true,
                rangelength:[8,8]
            },
            TKStudentEmail:{
                required: true,
                emailAddCheck:true
            },
            TKReviewDate:{
                required:true
            }
        },
        messages:{
            TKTypeAdd:{
                required: "You should choose a candidate"
                // candidateCheck: ""
            },
            TKStudentNum:{
                required: "Student number is required",
                rangelength:"Length must be 8 numbers"
            },
            TKStudentEmail:{
                required: "Email is required",
                emailAddCheck:"Please enter a valid email address"
            },
            TKReviewDate:{
                required:"Voting date is required"
            }
        }
    });
    return form.valid();
}

jQuery.validator.addMethod("emailAddCheck",
    function(value, element)
    {
        var regex = /^[^@]+@[^@]+\.[^@]+$/;
        return this.optional(element) || regex.test(value);
    },
    "Email Add Checker");

// jQuery.validator.addMethod("candidateCheck",
//     function(value, element)
//     {
//         return this.optional(element) && value !== "";
//     },
//     "Candidate Checker");
