'use strict';

// http://devdocs.magento.com/guides/v2.0/rest/list.html

module.exports = function (server) {

	server.route({
		method: 'GET',
		path: '/api/category-hierarchy',
		handler: function (request, reply) {
			console.log('getting hierarchy');
			reply({
				depth: 2,
				cats: [
					{
						name: 'Menswear', 
						slug: 'menswear',
						children: [{
							name: 'Tees',
							slug: 'mens-tees',
						}]
					},
					{
						name: 'Womenswear', 
						slug: 'womenswear',
						children: [{
							name: 'Dresses',
							slug: 'womens-dresses',
						}]
					}
				]	
			});
		}
	});

	server.route({
		method: 'GET',
		path: '/api/categories/{categoryId}/products',
		handler: function (request, reply) {
			let categoryId = request.params.categoryId;
			console.log('looking for category ', categoryId);

			var products = [];
			for(var i = 0; i < 10; i++) {
				products.push({
					id: i,
					title: 'Product ' + i
				});
			}

			reply(products);
		}
	});

	server.route({
		method: 'GET',
		path: '/{path*}',
		handler: function (request, reply) {
			reply.file('./public/index.html');
		}
	});
};


