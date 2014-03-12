define([
    'mystique/Base',
    'mystique/Result'
],
function(
    Base,
    Result
){
    // module:
    //		mystique/Date
    return Base.extend({

        regex: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}[A-Z]/,

        _isValid: function(value){

            var result = new Result({value: true});

            if (!(value instanceof Date && isFinite(value)) && !(typeof value == 'string' && this.regex.test(value))){
                result.set('value', false);
                result.addMessage('date');
            }

            return result;
        }
    });
});
