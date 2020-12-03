 $(document).on("click","#deleteDev",function(){
                         const id = $('#delDev').val();
                          $.ajax({
                          url: `https://projetobertolakim.000webhostapp.com/api.php?excluir_fiador=${id}`,
                          type: 'GET',
                          success: function(nsei){
                            console.log(nsei);
                            alert('funcionou');
                          },
                          error: function(){
                            alert("Erro ao deletar!");
                          }
                         });
                    })
                
                    $(document).on("submit","#formdev",function(event){
                        var dados = {
                         'nome_devedor': $('#nome').val(),
                         'telefone_devedor': $('#tel').val(),
                         'endereco_devedor': $('#ender').val(),
                         'cpf_devedor': $('#cpf').val(),
                         'rg_devedor': $('#rg').val()
                        }
                        
                    $.ajax({
                          url: 'https://projetobertolakim.000webhostapp.com/api.php',
                          data: dados,
                          type: 'POST',
                          success: function(nsei){
                            href="./index.html";
                            console.log(nsei);
                            alert('funcionou');
                          },
                          error: function(){
                            alert("Erro ao cadastrar!");
                          }
                         });
                    });
  