import { Component, OnInit }     	from '@angular/core';
import { ActivatedRoute, Params, Router }	from '@angular/router';
import { ItemService }				from '../itemService/itemService';

@Component({
    moduleId: module.id,
    selector: 'my-item',
    templateUrl: 'item.component.html'

})
export class ItemComponent implements OnInit {
    title = 'Item_page';

    constructor(
    	private itemService: ItemService,
    	private route: ActivatedRoute,
        private router: Router
    	){}

    ngOnInit(): void{
    	this.route.params.forEach((params: Params) => {
    	let id = +params['id'];
    	this.itemService.getItem(id).then(item => this.item = item);
    	});
    }

    goBack(): void{
        this.router.navigate(['/home']);
    }

}


