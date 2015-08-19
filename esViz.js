var esViz = {}

var whiteCol = new THREE.Color( 0xffffff );
var baseMaterial = new THREE.MeshPhongMaterial();
baseMaterial.color = whiteCol;



esViz.init = function(  scene  ){

  console.log( aggResp.took );
  
  //BasePlane
  var texture = THREE.ImageUtils.loadTexture(
    'checker.png'
  );
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat = new THREE.Vector2(2, 2);
  //texture.anisotropy = renderer.getMaxAnisotropy();
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    specular: 0xffffff,
    shininess: 20,
    shading: THREE.FlatShading,
    map: texture
  });
  var geometry = new THREE.PlaneGeometry(3 , 3);
  var basePlane = new THREE.Mesh(geometry, material);
  scene.add(basePlane);
  
  
  // var geometry = new THREE.BoxGeometry(.2, .2, .2);
  // var material = new THREE.MeshNormalMaterial();
  // var cube = new THREE.Mesh(geometry, material);
  // cube.position.set(0,0,.1);
  //
  // scene.add(cube);
  //
  // var geometry = new THREE.SphereGeometry( .5, 16, 16 );
  // var material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
  // var sphere = new THREE.Mesh( geometry, baseMaterial );
  // sphere.position.set(0,0,2);
  // scene.add( sphere );
  
  var len = aggResp.aggregations.hist.buckets.length;
  
  var width = 0.02;
  var spacer = 1.05;
  var heightScale = 0.0002;
  
  var yOffset = -1 * len * width * spacer / 2.0
  
  
  var counter = 0;
  aggResp.aggregations.hist.buckets.forEach( function(bucket){
    
    var height = (bucket.doc_count * heightScale) ;
    var geometry = new THREE.BoxGeometry(1 * width, 1 * width, height);
    var material = new THREE.MeshNormalMaterial();
    var bar = new THREE.Mesh(geometry, material);
    bar.position.set( 0, yOffset + counter * width * spacer, height / 2.0 )
    scene.add(bar);
    
    counter ++;
  });
  
  
  
}



/**
ES Query:

GET /logstash-* /_search?search_type=count&ignore_unavailable=true
{
  "size": 0,
  "query": {
    "filtered": {
      "query": {
        "query_string": {
          "analyze_wildcard": true,
          "query": "*"
        }
      },
      "filter": {
        "bool": {
          "must": [
            {
              "range": {
                "@timestamp": {
                  "gte": 1425749537956,
                  "lte": 1428514180291
                }
              }
            }
          ],
          "must_not": [
            
          ]
        }
      }
    }
  },
  "aggs": {
    "hist": {
      "date_histogram": {
        "field": "@timestamp",
        "interval": "12h",
        "pre_zone": "-04:00",
        "pre_zone_adjust_large_interval": true,
        "min_doc_count": 1,
        "extended_bounds": {
          "min": 1425749537956,
          "max": 1428514180291
        }
      },
      "aggs": {
        "responseCodes": {
          "terms": {
            "field": "response",
            "size": 4,
            "order": {
              "_count": "desc"
            }
          }
        }
      }
    }
  }
}




*/