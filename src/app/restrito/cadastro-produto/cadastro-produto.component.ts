import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../services/produto.service';
@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})

export class CadastroProdutoComponent {

  public produto: Produto = new Produto(0,"","",0);

  constructor(private _produtoService:ProdutoService, private _router: Router){}

  cadastrar():void{
    this._produtoService.cadastrarProduto(this.produto).subscribe(
      produto => {
        this.produto = new Produto(0,"","",0);
          setTimeout(() => {
            alert("Cadastro Efetuado com sucesso! Recarregue a página :)");            
          }, 1000);
      },
      err => { alert("Erro ao Cadastrar"); }
    );

    this._router.navigate(["restrito/lista"]);
  }

  
}
