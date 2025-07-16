import imageio.v3 as iio

filenames = ['gojo1.jpg', 'gojo2.jpg']
images = [ ]

for i in filenames:
  images.append(iio.imread(i))

iio.imwrite('gojo.gif', images, duration = 150, loop = 0)
