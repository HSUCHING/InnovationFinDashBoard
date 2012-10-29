/**
 * Created with JetBrains WebStorm.
 * User: I068959
 * Date: 10/23/12
 * Time: 4:27 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define("InnovationFinDashBoard.controller.Main",{
    extend: 'Ext.app.Controller',

        config:{

            refs:{
                AddDimension:'button[action=addbutton]',
                RemoveDimension:'button[action=removebutton]',
                PopTreeView:'button[action=poptree]'
            },
            control:{
                AddDimension:{
                    tap:'addDimensionItem'
                },
                RemoveDimension:{
                    tap:'removeDimensionItem'
                },
                PopTreeView:{
                    tap:'poptreeview'

                }
            }
        },

        addDimensionItem:function(button,event){

            switch(button.getParent().id){
                case "dimensionitem11":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem1').show();
                    break;
                }
                case "dimensionitem22":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem2').show();
                    break;
                }
                case "dimensionitem33":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem3').show();
                    break;
                }
                case "dimensionitem44":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem4').show();
                    break;
                }
                case "dimensionitem55":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem5').show();
                    break;
                }
            }
        },

        removeDimensionItem:function(button,event){

            switch(button.getParent().id){
                case "dimensionitem1":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem11').show();
                    break;
                }
                case "dimensionitem2":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem22').show();
                    break;
                }
                case "dimensionitem3":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem33').show();
                    break;
                }
                case "dimensionitem4":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem44').show();
                    break;
                }
                case "dimensionitem5":{
                    button.getParent().hide();
                    Ext.getCmp('dimensionitem55').show();
                    break;
                }
            }

        },

        poptreeview:function(button,event){

            var margin = {top: 20, right: 120, bottom: 20, left: 120},
                width = 1280 - margin.right - margin.left,
                height = 800 - margin.top - margin.bottom,
                i = 0,
                duration = 500,
                root;

            var tree = d3.layout.tree()
                .size([height, width]);

            var diagonal = d3.svg.diagonal()
                .projection(function(d) { return [d.y, d.x]; });

            var vis = d3.select("#paneltreeview").append("svg")
                .attr("width", width + margin.right + margin.left)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//    var jsonhttp=new XMLHttpRequest();
//    jsonhttp.open('GET','data/flare.json',false);
//    jsonhttp.send(null);
//    var jsonresponse=jsonhttp.responseText;
//    console.log(jsonresponse);
////    console.log("hello");

            d3.json("resources/json/tree/flare.json", function(json) {
//    d3.json(jsonresponse, function(json) {
                root = json;
                root.x0 = height / 2;
                root.y0 = 0;

                function collapse(d) {
                    if (d.children) {
                        d._children = d.children;
                        d._children.forEach(collapse);
                        d.children = null;
                    }
                }

//                root.children.forEach(collapse);
                update(root);
            });

            function update(source) {

                // Compute the new tree layout.
                var nodes = tree.nodes(root).reverse();

                // Normalize for fixed-depth.
                nodes.forEach(function(d) { d.y = d.depth * 180; });

                // Update the nodes…
                var node = vis.selectAll("g.node")
                    .data(nodes, function(d) { return d.id || (d.id = ++i); });

                // Enter any new nodes at the parent's previous position.
                var nodeEnter = node.enter().append("g")
                    .attr("class", "node")
                    .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
                    .on("click", click);


                node.on("mouseover", clickShowDetail);


                nodeEnter.append("circle")
                    .attr("r", 1e-6)
                    .style("fill", function(d) { return d._children ? "#470759" : "magenta"; });
//                nodeEnter.append("svg:rect")
//                    .attr("class","box").attr("x",-100).attr("y",-10).attr("width",100).attr("height",50)
//                    .style("fill", function(d) { return d._children ? "#470759" : "magenta"; });


                nodeEnter.append("text")
                    .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
                    .attr("dy", ".35em")
                    .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
                    .text(function(d) { return d.name + "  "+d.size; })
                    .style("fill-opacity", 1e-6);

                // Transition nodes to their new position.
                var nodeUpdate = node.transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

                nodeUpdate.select("circle")
                    .attr("r", 8)
                    .style("fill", function(d) { return d._children ? "#470759" : "magenta"; });

                nodeUpdate.select("text")
                    .style("fill-opacity", 1);

                // Transition exiting nodes to the parent's new position.
                var nodeExit = node.exit().transition()
                    .duration(duration)
                    .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
                    .remove();

                nodeExit.select("circle")
                    .attr("r", 1e-6);

                nodeExit.select("text")
                    .style("fill-opacity", 1e-6);

                // Update the links…
                var link = vis.selectAll("path.link")
                    .data(tree.links(nodes), function(d) { return d.target.id; });

                // Enter any new links at the parent's previous position.
                link.enter().insert("path", "g")
                    .attr("class", "link")
                    .attr("d", function(d) {
                        var o = {x: source.x0, y: source.y0};
                        return diagonal({source: o, target: o});
                    });

                // Transition links to their new position.
                link.transition()
                    .duration(duration)
                    .attr("d", diagonal);

                // Transition exiting nodes to the parent's new position.
                link.exit().transition()
                    .duration(duration)
                    .attr("d", function(d) {
                        var o = {x: source.x, y: source.y};
                        return diagonal({source: o, target: o});
                    })
                    .remove();

                // Stash the old positions for transition.
                nodes.forEach(function(d) {
                    d.x0 = d.x;
                    d.y0 = d.y;
                });
            }

            // Toggle children on click.
            function click(d) {
                if (d.children) {
                    d._children = d.children;
                    d.children = null;
                } else {
                    d.children = d._children;
                    d._children = null;
                }

                update(d);
                if(!(d.children|| d._children)){ naviTo(d);}
//                naviTo(d);

            }


            function naviTo(d) {
                var tabview=new InnovationFinDashBoard.view.TabViewShow({dupontComponent:d.name});
                Ext.getCmp('myPanel').push(
                    tabview
                )
            }

            function clickShowDetail(d) {
                Ext.getCmp('shownodedetail').setHtml("<div class=\"detail\">Select Node:"+ d.name+"</div>"+"<div class=\"detail\">Target Value:"+ d.size+"</div>"+"<div class=\"detail\">Actual Value:"+ d.size+"</div>");
            }

        }


    }
)