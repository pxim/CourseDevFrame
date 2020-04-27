---
typora-root-url: img
---

## 拆装动画模板
1. [配置表说明](#user-content-配置表说明) 
	- [menuInfo.xml](#user-content-menuinfoxml)
	- [partInfo.xml](#user-content-partinfoxml)
	- [toolInfo.xml](#user-content-toolinfoxml)
	- [actionStep.xml](#user-content-actionstepxml)
2. [场景动画说明](#user-content-场景动画说明)
	- [场景动画里--热点区域颜色](#user-content-1-场景动画里--热点区域颜色)
	- [场景动画里--代码](#user-content-2-场景动画里--代码)

## 配置表说明
### menuInfo.xml
> 菜单配置表  
> root → item 节点的属性

| 属性      | 描述                                                         | 备注         |
| :-------- | :----------------------------------------------------------- | :----------- |
| mId       | 菜单的序号                                                   |              |
| name      | 菜单的名字                                                   |              |
| partGroup | 当前菜单页所需要显示的零件，所属群组                         |              |
| href      | 菜单按钮相对应的页面                                         |              |
| poster    | 当前页相对应的海边图片（图片要求：1.是当前页面初始化显示时的状态图片；2.图片大小尽量压缩；) | 目前暂时弃用 |

***
### partInfo.xml
> 零件信息配置表；用于零件箱里的图片和场景里零件的图片  
> root → item 节点的属性

| 属性    | 描述                                                    | 备注 |
| :------ | :------------------------------------------------------ | ---: |
| id      | 零件的序号                                              |      |
| name    | 零件的名字                                              |      |
| group   | 零件群组（比如第一步出现的零件，那么group=1，以此类推） |      |
| isUse   | 零件是否在使用(false：没有；true：在使用)               |      |
| href    | 零件箱里零件图片的路径                                  |      |
| href2   | 场景里零件图片的路径                                    |      |
| offsetX | 场景里零件图片的鼠标X偏移量                             |      |
| offsetY | 场景里零件图片的鼠标Y偏移量                             |      |

***
### toolInfo.xml
> 工具信息配置表；用于工具箱里的图片和场景里工具的图片  
> root → tool → item 节点的属性

| 属性        | 描述                                                         | 备注 |
| :---------- | :----------------------------------------------------------- | ---: |
| id          | 工具的序号                                                   |      |
| name        | 工具的名字                                                   |      |
| iscomTool   | 是否是组合工具部件（true：是；false：不是）                  |      |
| comBoxIndex | 如果是组合工具部件，则填写本部件所在的组合框索引（1，2，3 是组合工具部件所在 工具箱组合框上 对应的框子索引）；如果不是，则空着； |      |
| isUse       | 工具是否在使用(false：没有；true：在使用)                    |      |
| href        | 工具箱里工具图片的路径                                       |      |
| href2       | 场景里工具图片的路径                                         |      |
| offsetX     | 场景里工具图片的鼠标X偏移量                                  |      |
| offsetY     | 场景里工具图片的鼠标Y偏移量                                  |      |

> root → combineTool → item 节点的属性

| 属性         | 描述                                                         | 备注 |
| :----------- | :----------------------------------------------------------- | ---: |
| id           | 组合工具的序号                                               |      |
| name         | 组合工具的名字                                               |      |
| combineUnit1 | 构成本组合工具的部件1（和工具箱组合框1对应），有，则填写对应的工具部件的id；没有，则空着； |      |
| combineUnit2 | 构成本组合工具的部件2（和工具箱组合框2对应），有，则填写对应的工具部件的id；没有，则空着； |      |
| combineUnit3 | 构成本组合工具的部件3（和工具箱组合框3对应），有，则填写对应的工具部件的id；没有，则空着； |      |
| isUse        | 工具是否在使用(false：没有；true：在使用)                    |      |
| href         | 工具箱里工具图片的路径                                       |      |
| href2        | 场景里工具图片的路径                                         |      |
| offsetX      | 场景里工具图片的鼠标X偏移量                                  |      |
| offsetY      | 场景里工具图片的鼠标Y偏移量                                  |      |

***
### actionStep.xml
> 操作步骤配置表  
> root → item 节点的属性

| 属性     | 描述                 | 备注 |
| :------- | :------------------- | :--- |
| id       | 操作步骤的序号       |      |
| name     | 操作步骤的内容       |      |
| progress | 本次操作给予的进度值 |      |
| score    | 本次操作给予的分值   |      |

***

## 场景动画说明
#### 1. 场景动画里--热点区域颜色
   拆卸模块：（红色：使用工具；绿色：用鼠标点击；）  
   安装模块：（蓝色：放置零件；绿色：使用工具；）  
#### 2. 场景动画里--代码
![image][image id]

![course-CZ-H5 1](/course-CZ-H5 1.png)

![](./img/course-CZ-H5 1.png)

![](img/course-CZ-H5 2.png)

| 属性    | 值                                                           | 备注 |
| :------ | :----------------------------------------------------------- | :--- |
| btn     | 热点区域按钮的实例名。                                       |      |
| mc      | 动画里零件MC的实例名，如果无，则空着。                       |      |
| partId  | 点击当前热点后，需要在零件面板里出现或者拿出的零件的id；如果无，则空着。 |      |
| toolId  | 触发当前热点，需要的工具的id；如果无，则空着。               |      |
| toolAni | 使用工具触发当前热点后，播放的动画MC的实例名；如果无，则空着。 |      |
| stepId  | 当前操作步骤顺序序号。                                       |      |









[image id]:data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAArgAAABVCAYAAACihZdaAAAXTklEQVR4Ae2da3LbOhJG7ZT/e5ezjVSWMbNKewWeajln7uceAATBh/j4VKXbQL/QOKAYCOFVXj8+Pr7e399fPj8/X3rki18mYAImYAImYAImYAImcGACr19fX1/e3I6v0Ovr6yP46+vrIXN/PLMjTcAETMAETMAETMAERgj86t3cht/U68/rn5d4T716fKZyHMFe2szmje4R6nQNJmACJmACJmACJnAnAr96HktgE6xgSpvU31+/1aXa7vWrJphhYBM6I8SuJmACJmACJmACJmACJyaw6gnuiTnMLp2NMye2mgAdPmpz2wRMwARMwARMwARMYFsCb3NPcPXklnbpRLZkQxdTasUw5ZIPNpV5IxkbTNXRZuNJLProY1MdftjoryEZZ4vca9TnHCZgAiZgAiZgAiZwVgJvPH7QK9l0xmaVdp682rSNv250iVW/0JV88FUZG0XdJOaNY7YTm/X0Ixftmi/6JVJrXpLHsSZgAiZgAiZgAiZgAj8JDD+D+zPNzx4b2Z/adi9iYlPLxrY3BxvS2JTGyxvHNmdbTcAETMAETMAETODqBA71DG5satnozgEfm1o2unPi7GsCJmACJmACJmACJnA9Apuc4I5g4uQ2YvMmN05nOaHNuVW/5yaXk2Idn9rQ4YPe0gRMwARMwARMwARMYHsCr0v+JTM2pTxOQD/Kzrq8aWVq2S/ro9/aMGIjrrSpxCfb0Ees2lSfbYwTEj+Nbel7YtXHbRMwARMwARMwARMwgfkE/C+ZFZjFxjVvWgtuD1Xe5OZ+b1zNz3oTMAETMAETMAETMIF5BA71DO680rfxZoOKnBolNsK6Gc79WnyvXy3eehMwARMwARMwARMwgTIBn+CWuVhrAiZgAiZgAiZgAiZwUgI+wd1o4eIEWN8bDeO0JmACJmACJmACJmACiYBPcBOQtbo84qCPL6yV23lMwARMwARMwARMwATqBHyCW2djiwmYgAmYgAmYgAmYwAkJ+AR3o0XzCe5GYJ3WBEzABEzABEzABCYIvH1+fr68v7+/9Mr8W7e5H+OVdKrX38Tld3An6vzfb86Gn/61v24kS238sdGvjad+2UfHzTb3TcAETMAETMAETMAEjkFg6AQ3NrC6MdW+tmOKpX7oNX4KRWw6dXNZ6kcO9Yl+yS/7TI09amejvNd4o3U6zgRMwARMwARMwASuRmD2Ce4UADausbGtvfCp2bOeTSKbxmyPPj5qCx2bXKTa3TYBEzABEzABEzABE7gegV9zHk9g+rFBZQObT2jDB93cjSz5S5INamkjW/If1cU4tfdoTseZgAmYgAmYgAmYgAnsR2D1X1Fgc7vmFNjcjuTUU9ye+PCvvXvi7WMCJmACJmACJmACJvBcAkPP4FJybTMb+vzSU19sc054Y5ObX2xeVR+6/FqyQc65evvUW6qnN4f9TMAETMAETMAETMAE5hN4/fj4+Bp5TGH+UM+JeMbmNmbKBpdZe6MLCUsTMAETMAETMAET2JbAohPcbUtbll03mN5cLmPpaBMwARMwARMwARM4E4HVn8E9yuRjU8v7KDW5DhMwARMwARMwARMwge0JDP2KwvZl1UeIk1neda/nW17/8/3MMPL5Fe1XAXNG7jfy2EjUiRzL8twoakc+t5rjjQ4XZG+F+CN74+7iBxfkGvMmF3KNnHfJATPkXeY9NU94IKf872aHC7J3/vgjiWOPpn+Tjm1XGc/gxqtXPpyf+J/4ydvvn72dLmKO73S2fo+Xf8fh8dcXksjoZx22UUlOlaO55saV5oIOOTfn3v7Uidx7/LnjlepEh5yb8yj+fF5VlmrDXrKVdHBBZp/Q81Yb/ki1Ha0Nk5D5pTba2Sf6LVvRv3KfwxemJX41G75Ich1Rwitk7dWy1WJCPxIHM2Qr/xq2GId3Ld9oLWvGkQtZq/Xoer3eaJdqbtmK/hOf44gpsUOHzLnn1pHj1+if7gR3zu7/+z7RjtjzG8bXv/7/Fx7a1f205m9JYSVnSN7ZL/d/Zh3rbZFzrJLzRY2yG407GqHaZy4+r3xmtZ3rxyfrR/rBlM9NyL0Y1xiMzCFipnjBbMpvdPwc1+LasuU8a/b3ZL60btZraR6NX/va5nOjY6zVjtxzX2vPb+742X/L622vz3HM6WhcM+dW/7LP4LYmvbWNDydy6/Gekb82N/TIZ9Q2Z0zqRM6J3du3ViN65N51HX08uCB768Uf2Rt3Fz+4IHXeJR32HlvLhzxHl7HBiY3I2hud2rxhhqz57aXni8xeG6TavNEj95r/WcaBCzLXPaWv2XOeZ/TfrvwTYQDVGwzfjFVHO9v05oStlRNbj+RDny8O9JEDm+poY2Ms9L1x+EcebZPvSJL10Zpa6/FgIL+HrPE5TnNqGyaq62Ee/sRmtuizj45xlLYyo6bMTn3Uhj50pfZj/n9/11rjGKcmyVWyq21OTtZIZSn/Wjqtk3auF32MOcc2WqOOl3OoLdeSfUt9rvn82Qnflq2Ua1Snc6Cd54I+xphjm1sT48QY2iYPulIdoZuyk0clnB/xf//fkLwe6jPHpuP0tBmHz1vE6HjYs74n9zN8dD0eNcu6Rh97zzWFr84jx6ktt0vx+KhtTk7iTyt7n73Fb43nIkZzxGfh+/7TnyH7T/XJnMcqxWUfYlsynlfRZ1Zq7cihtlKfcab8sl3j1KZtfFpyrn8r15QN/llGHDpylPqhy3r8azLPT/vaftTw9zkmcoU9+6iN9lxZyzk3T49/5qV9bUeuUj/rGLOmb9lzTKkfuqwnZ0uyVs9kS325fu1rO/xzv6ar5S7555zR502eEdli27KNjFWLyXPDL+u1r+3wz/2aTvU5Jvqq03atJtXneGxTssY567Wv7cif+zWd6nNM9FWnbeZQ0mFrydG4Vs6aLa/bVJ88Lb+WrRYf+qm4sPMmzxw5ynXJmHPqq/me6gQ31jG+icT7e023/V7RGqNlm6pKv7FO+W5tP1Ita801r03urzEO3PTEIefFJ+uv0IepngzkeeGT9Vv0R8eK9dN1yv0taj1TzlGuZ5rjlrXWPh+jXEfjtpxjK3ft/qifuVb8kW2xFqxvtOesDXF7zW9ObWvVxByfMTZzePv8/Hy5w2MKTNjSBNYioJuh2o18rbGOmCduYNy8uJkdsU7XZAJ7E9DPRoyd+3vXs/d4em98zD99kdy7nq3G0/sf7Z6x5vj25LNPmcClf0WhPOV1tHHD4r1OxutngVfILV85/xbj5hv4lvNZknuLuUc9kfdIN+mt5lljv/d4tTq21o/Os/WFr2VrzWe0llbOs9nMYN0VW8IzYnnFvVD76HvkaFxPbnyWzJMca8q96nmNZ2vPdILLxdD7hyv+LE4pDh9s9CMm63JffRijJvXGzl/RoMv9R97CT6W0/BmXXPRDtuLwzz4an9v4hp747JP7Ja7Zp9QnLthHGxm+PetBvPqXxsk6neMjNq1HtuOT9SU++JRsuQ76xDAO+pYcnXvk1NjHmI9Hvf4ZLdvxyXrW6J/If3KrLceRj7iWXW2ak9iW3JsrtVBzrhd9+PXaNIb8xLZs4duyq4185J+SLa4tWy3vklrISY48F/Th12vTGPJHrOpzHz8dB/+ar9aDr8Zrzqk23PN9B/0jb+M+p3Eaw7hhV33u46fj4F/z1TE1PrfJo7mzT+4v4amxjzHT/TF0+Ogaqj7H4R/6eGlcts2xa6zm/B6l/d8RrpGRMUvjYctzaFcy3/oaD+f2PqYwP/36EXuBWb9yZwwCrF/poj8aofhg995cj1a71jPKPOLOsE461z3bo1z3rPFqY5n51Vb0+fM50jV1lXsuTGN1a3+G4FOzr3FlnO4Ed41JO0ebgH5jU88lmz0u5si35QWt9S5pK4Ml8+6tQcfTmCVjL2G+JFbrv2LbbPZfVTPfn/mRRjza/XELNne5xvec5+lOcLe4sJzTBEzABEzABEzABEzgOgRO9y+Zxe6f95GXgW+cyCPXunZtzBm5dv6181Encu38e+SjduQeY55pDLgge2vHH9kbdxc/uCDXmDe5kGvkvEsOmCHvMu+pecIDOeV/NztckL3zxx9JHHs0Pa3Ftqc83QkuwHr+mnuO75rQY7Hjr5aR5OYiWPLXzuRCkpN+yDXza15t67g6HnNGaswR29SJPGKN1BQ18jozc+aQJZ9X1Zc+5/iVbBpLm7VFokdegStMYk6Zi9qYc/YJPX4lG3Eq4YlU2yNf5XrFrxSHDonvESW8orYas/Cp2VpzGomDGbKVfw1bjMNL70foQo7WMhJXq4dcSK3vTG293qi7dG3hV7IRpxIuSLVFO/S8dJ3xR+KDnFsHcWvKS/8ObiwwkGvQwt57IdRy9Orj4tCLpTcOv9KFRM7ShdeKwzYicx25P5LzTjEjvHJM7p+JX+0zx+ewZmeOPZ9rfKdk5pj7U/Gj9qk5zs2r7HKs2mhnn+jvyTU47/3ak/nSubXWaTT32tc2f+ZssZbk7p1rnlvu9+ZZ02/L6611fez5OV6T1xa5/Du4G1Dlw4ncYIjDpmTOyMMW+rcw6kQevd5SfdSOLPncWQcXZC8L/JG9cXfxgwtS513S9diJQ2rM2dpscELu8YIZco8xW2OwydxiA9waN9vggcz2u/fhguzlgT+yN25Pv0uf4AJSbzB881Ed7WzTb0LYWjmx9Ug+9PniQB85sKmONjbGQt8bh3/k0Tb5WjKP3fJdw8b6aK7WeoSf2jVe9Zovt2Gi+jxv9VEb+swWfeSkrXE6Vm73+uW40b4yI0dmpz5qQx+6UjvyqZ78U5KYkp/atJaS7zN1WiftXC/6qHOObXReOl7OobZcS/Yt9ede56UcS3U6B9p5LuhjrDm2ubUxToyhbfKgK9URuik7eVSyBo/4vyfn+X6iPnNsOk5Pm3FiDG0Tiy76uQ58SnKObyl+VKfrETl0XaOPveeawldryXFqy+1SPD5qm5PzWVype7GM38GNf+yhRz6cnvifuH6+r6H+IrL/VJ/MeaxSXPYhtiVf/v3yFW9etXbY1Vbql3KU/HIejVObtvGZkiMxUzlLdvhnGb7oiCv1Q5f1+Ndknpv2tf2oQdaUfvZhnJoe+5RcGj+VH3vmpX1th3+pn3W1vOiRpbisK/VDl/XkrEllGW3t12LW0NfqzHrtaztqyP2ajnp7/LNP9HmTZ0SWuJZ0I7l7Y/LciMt67Ws7/HO/plN9jom+6rRdq0n1OR7blKzxznrtazvy535Np/ocE33VaZs5lHTYpuSS2Kncas/rNtUntuXXstXiQz8VF3be5JkrR7guHXNujdn/VCe4sY7xTSTe32u6eH/fTNAao2VrJo0VT/9SzJT/lvYltcS37SXxW80rr03urzEu89YTh5wXn6xf0j8Kc5jqyUCeFz5Zv0V/dKxYI9ZQ21vUeMaco1zPONctaq59Pka5jsZtMbeenHy2su8W98YYY8/7Y6wF6xvtOWtDXOayVX9ObaUaRrgyx6Vjl+rp1b2d6Z/p7Z2U/bYnMHLBb1/VviMog2hv/dLxth6rJ3/cwLh5cTPriTuaz1Z/2B5tnq5nPwL62YhRc3+/Sp4zUr5X5f4WVe0xRq5b73+0s0+pP8e3FL+n7hlc15rf6X4Hd62JL80TNyzeS3OdLX70godXyC1fOf8W444yGJ336HhbzD3mEHmPdJMenWdw5TWH8eh4jHUWOTpP5brWXEdrWWv8I+Qxg/IqzPnsaoYlPCOWV9wLtY++R47G9eTGZ3Seo1wZ99ny0r+DG3DzxVP6QxkfbPQjPutyX32mFlNv+pwaocv9R97Cowwtf8YnF/2QrTj8s4/Gaxs/1ZFDdbld4pp9Sn3ign20keHbsx7Eq39pnKzL88xzzPZHfvkrb/LluNATW7IRpxJ/1fXEjs79UaPcwKMPa2rQ3Oh0bVRHG0ms5kSHT8heu8ZqjOYqtZVrD09yjI5HfEhy5HrRh0+vTWMYg9iWTesgTsfVWPKpX6vdYtuy1XIuqYWc5MhzQR9+vTaNIX/Eqj738dNx8K/5aj34arzmnGrDPV/r6B950587NZvqGTfyqj738dNx8K/55lo1B21y0Nf8qsvtJTw19jHe41HYnyPgo2sYHuhznOqnbHPsmjfXEnlqr1GukY8x54xXq2NU/xr/g9mZHlMAWkz4meBGgd89jvU7w9rFh7vn5nr0NR1lHnFnWKdn8R/l+qx6rzCumV9hFY81hyNdU1e558I0VvqZf4ac7gT3WB+Na1ZT+tb2uFDTN/s5sz/KBd9bszLYY5Or42mNS8ZewnxJrNZ/xbbZ7L+qZr4/8yONeLT74xZsfI2vT/V0J7jrI3BGEzABEzABEzABEzCBKxE4xQmufrMJ+M888r7S4nsuJmACJmACJmACJnBFAqf4FYXY0HpTe8XLz3MyARMwARMwARMwgfUJnOIEl2lzkuvNLkQsTcAETMAETMAETMAEMoFTnODmot03ARMwARMwARMwARMwgRqBS53g+oS3tszWm4AJmIAJmIAJmMB9CFzqBNfP6t7nwvVMTcAETMAETMAETKBG4FInuLVJWm8CJmACJmACJmACJnAfApc6wb3PsnmmJmACJmACJmACJmACNQI+wa2Rsd4ETMAETMAETMAETOCUBC51ghv/kxn/o9kpV8NFm4AJmIAJmIAJmIAJLCZwihPcvGmt/Q4ufjX7YlpOYAImYAImYAImYAImcHgCpzjB5dcRkDWqU/ZanPUmYAImYAImYAImYALXIXCKE9zr4PZMTMAETMAETMAETMAEtiZwihPcrSFsld/PBP8kax4/ebhnAiZgAiZgAiawDYFf7+/vL5+fny89cpsSXh7/Y5hufmiHHH315lgyRqs28p7xeeA/r39e4j316vHRHLCAjdrcNgETMAETMAETMIG1COx+glva3LDxqcmpyfbkrOVgzJq9pC+NV/I7g660Sf399bur9F6/rmR2MgETMAETMAETMIGVCBziBHeluRwmDRvgkc3zYSaxUSEwgdFGwzitCZiACZiACZjAjQm89T6egB+s8gaFjUvY1YZedbSxkbMliQkf4lRHG1srV9jw13wao3Z8VEe7dzxyE0fOrI98+Ggbf2z0iZ8r9eSWdulEtmRDF2O2Yqip5IOtJJnjXLalXNaZgAmYgAmYgAncj8DQryjEBkQ3H9rXduCc6oM8/PKLMaZyZDt5anrsIUs+WTfV13zkDEn92KfyhH0kjvwjMjarpQ0om1hsJb8eXcmnNs+R+h1jAiZgAiZgAiZgApnA0DO4sXGLTUpto4INex601o+8vGs+e+in5jdaQ+SNF3xKefBRG/UQW/JR/7XabG7n5IuY2NTGO14jOeaMZ18TMAETMAETMAETyATeen49IT+eEEnYZMVmjTbJcx/9mSRzKM1vyTw0X7Sv+GJTWzq9veJ8PScTMAETMAETMIFjERg6wdWNWWwEtZ+n17Jl3637vbWo39T8SjXr5ljtkReb6nva1JHjIyfvnjxb+3ByG+NwmqtjwjbPQ33cNgETMAETMAETMIElBIafwdVB82aFTUz4ZFvosGOjj3/uaww+IfVFTCmn+rXsNRt6zZPHU1u0a3b06h/5s742ZtZrXLbpGK02m1I9ecU/60qb1vDNfjmePvW2au3xIZ+lCZiACZiACZiACWQCrx8fH1+jjynkZO7/JLDmRi1y1TaFa47zcwbr9nrr7PVbtzpnMwETMAETMAETuAqBoRPcq0z+DPNgsxe15g1uy3aGublGEzABEzABEzABE9iCwNAzuFsU4pxlArGp5Z090OeNb/Zz3wRMwARMwARMwATuRMAnuHdabc/VBEzABEzABEzABG5AwCe4N1hkT9EETMAETMAETMAE7kTAJ7h3Wm3P1QRMwARMwARMwARuQMAnuDdYZE/RBEzABEzABEzABO5EwCe4d1ptz9UETMAETMAETMAEbkDAJ7g3WGRP0QRMwARMwARMwATuROC/Ipy+hA7VaRsAAAAASUVORK5CYII=