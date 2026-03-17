import $ from 'jquery';
export function PageBcPnpCalculatorJS() {
      $(document).ready(function(){
        $('.input__field').click(function(){
            var text=$(this).next().text();
            if($(this).attr('name')=='fieldname111_1'){
              if(text=='No'){
                $(this).parent('div').parent('div').parent('div').next().hide();
                $('#fieldname112_2_rb0').prop('checked',true);
              }else{
                $(this).parent('div').parent('div').parent('div').next().show();
                $('#fieldname112_2_rb0').prop('checked',false);
              }
            }
            if($(this).attr('name')=='fieldname109_1'){
              if(text=='No'){
                $(this).parent('div').parent('div').parent('div').next().hide();
                $('input[name="fieldname110_1"]').prop('checked',false);
              }else{
                $(this).parent('div').parent('div').parent('div').next().show();
              }
            }
            if($(this).attr('name')=='fieldname108_1'){
              if(text=='No'){
                $(this).closest('div').prev().find('.hidden').hide();
                $('input[name="fieldname118_1"]').prop('checked',false);
              }else{
                $(this).next().next().show();
              }
            }
            Calculate();
        })
        $('body').on('change','.input__field_text',function(){
          Calculate();
        });
        $('body').on('input','#fieldname113_1_rb0',function(){
          Calculate();
        });
        $('body').on('click','.next',function(){
          $(this).closest('div').parent('div').hide();
          $(this).closest('div').parent('div').next('div').show();
        })
        $('body').on('click','.previous',function(){
          $(this).closest('div').parent('div').hide();
          $(this).closest('div').parent('div').prev('div').show();
        })
        $('body').on('click','.previous',function(){
          $(this).closest('div').parent('div').hide();
          $(this).closest('div').parent('div').prev('div').show();
        });
        function Calculate(){
          let total=0;
         let feild1= $('input[name="fieldname104_1"]:checked').val();
         if(feild1 && feild1 !=undefined){
          total+=parseInt(feild1);
         }
         let feild2= $('input[name="fieldname105_1"]:checked').val()
         if(feild2 && feild2 !=undefined){
          total+=parseInt(feild2);
         }
         let feild3= $('input[name="fieldname106_1"]:checked').val()
         if(feild3 && feild3 !=undefined){
          total+=parseInt(feild3);
         }
         let feild4= $('input[name="fieldname107_1"]:checked').val()
         if(feild4 && feild4 !=undefined){
          total+=parseInt(feild4);
         }
         let feild5= $('input[name="fieldname108_1"]:checked').val()
         if(feild5 && feild5 !=undefined){
          total+=parseInt(feild5);
         }
         let feild6= $('input[name="fieldname109_1"]:checked').val()
         if(feild6 && feild6 !=undefined){
          total+=parseInt(feild6);
         }
         let feild7= $('input[name="fieldname110_1"]:checked').val()
         if(feild7 && feild7 !=undefined){
          total+=parseInt(feild7);
         }
         let feild8= $('input[name="fieldname111_1"]:checked').val()
         if(feild8 && feild8 !=undefined){
          total+=parseInt(feild8);
         }
         let feild9= $('input[name="fieldname112_1"]:checked').val()
         if(feild9 && feild9 !=undefined){
          total+=parseInt(feild9);
         }
         let feild10 = parseFloat($('input[name="fieldname113_1"]').val());
         if (isNaN(feild10)) {
          total += 0;
         } else {
          let roundedValue =parseInt(feild10);
            if(roundedValue){
              if (roundedValue < 16) {
                  total += 0;
              } else if (roundedValue < 70) {
                  total += roundedValue-15;
              }else {
                  total += 55;
              }
            }
         }  
         let feild11= $('input[name="fieldname114_1"]:checked').val()
         if(feild11 && feild11 !=undefined){
          total+=parseInt(feild11);
         }
         let feild12= $('input[name="fieldname115_1"]:checked').val()
         if(feild12 && feild12 !=undefined){
          total+=parseInt(feild12);
         }
         let feild13= $('input[name="fieldname116_1"]:checked').val()
         if(feild13 && feild13 !=undefined){
          total+=parseInt(feild13);
         }
         let feild14= $('input[name="fieldname117_1"]:checked').val()
         if(feild14 && feild14 !=undefined){
          total+=parseInt(feild14);
         }
         let feild15= $('input[name="fieldname118_1"]:checked').val()
         if(feild15 && feild15 !=undefined){
          total+=parseInt(feild15);
         }
          $('#fieldname1_1').text(total);
        }
      })

   $('body').on('change','#fieldname48_1', function (e) {
        var value=$(this).val();
        // $('input[name="fieldname117_1"]').attr('checked',false)
        if(value == 'Select...'){
            $(this).closest('div').next().hide();
        }else if(value == 'IELTS'){
          $(this).closest('div').next().show();
          $('#fieldname57_1').attr({'max':9,'placeholder':'0-9'})
          $('#fieldname58_1').attr({'max':9,'placeholder':'0-9'})
          $('#fieldname59_1').attr({'max':9,'placeholder':'0-9'})
          $('#fieldname60_1').attr({'max':9,'placeholder':'0-9'})
        }
        else if(value == 'CELPIP'){
          $('#fieldname57_1').attr({'max':12,'placeholder':'0-12'})
          $('#fieldname58_1').attr({'max':12,'placeholder':'0-12'})
          $('#fieldname59_1').attr({'max':12,'placeholder':'0-12'})
          $('#fieldname60_1').attr({'max':12,'placeholder':'0-12'})
          $(this).closest('div').next().show();
        }
        else if(value == 'TCF'){
          $('#fieldname57_1').attr({'max':699,'placeholder':'0-699'})
          $('#fieldname58_1').attr({'max':20,'placeholder':'0-20'})
          $('#fieldname59_1').attr({'max':699,'placeholder':'0-699'})
          $('#fieldname60_1').attr({'max':20,'placeholder':'0-20'})
          $(this).closest('div').next().show();
        }
        else if(value == 'TEF'){
          $('#fieldname57_1').attr({'max':300,'placeholder':'0-300'})
          $('#fieldname58_1').attr({'max':450,'placeholder':'0-450'})
          $('#fieldname59_1').attr({'max':360,'placeholder':'0-360'})
          $('#fieldname60_1').attr({'max':450,'placeholder':'0-450'})
          $(this).closest('div').next().show();
        }
    });
}

