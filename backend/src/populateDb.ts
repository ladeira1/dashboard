import { Widget } from "@prisma/client"
import { prisma } from "./services/prisma"

const widgets = [
  {
    icon: "HiOutlineFire",
    title: "ACE Opportunities",
    widgetValueVariant: {
      create: {
        items: {
          create: [
            {
              text: "Total",
              amount: 1234
            },
            {
              text: "AWS",
              amount: 1000
            },
            {
              text: "Partners",
              amount: 234
            }
          ]
        }
      }
    }
  },
  {
    icon: "HiCurrencyDollar",
    title: "Gross software sales",
    widgetGrowthVariant: {
      create: {
        amount: 100,
        difference: 5200,
        percentage: 23,
        status: "increase",
        button: {
          create: {
            text: "View More",
            icon: "HiChevronRight"
          }
        }
      }
    }
  },
  {
    icon: "HiDocumentText",
    title: "Private offers",
    widgetGrowthVariant: {
      create: {
        amount: 100,
        difference: 5200,
        percentage: 23,
        status: "decrease",
        button: {
          create: {
            text: "View More",
            icon: "HiChevronRight"
          }
        }
      }
    }
  },
  {
    icon: "HiOutlineUsers",
    title: "Active subscriptions",
    widgetGrowthVariant: {
      create: {
        amount: 100,
        difference: 5200,
        percentage: 23,
        status: "increase",
        button: {
          create: {
            text: "View More",
            icon: "HiChevronRight"
          }
        }
      }
    }
  },
  {
    icon: "HiOutlineThumbUp",
    title: "Reseller authorizations",
    widgetValueVariant: {
      create: {
        items: {
          create: [
            {
              text: "Active",
              amount: 100,
              color: "success-main"
            },
            {
              text: "Expired",
              amount: 254,
              color: "error-main"
            }
          ]
        }
      }
    }
  },
  {
    icon: "HiOutlineColorSwatch",
    title: "Listings",
    widgetValueVariant: {
      create: {
        items: {
          create: [
            {
              text: "Active",
              amount: 100,
              color: "success-main"
            },
            {
              text: "Expired",
              amount: 254,
              color: "error-main"
            }
          ]
        }
      }
    }
  },
  {
    icon: "HiOutlineStar",
    title: "Free trials",
    widgetValueVariant: {
      create: {
        items: {
          create: [
            {
              text: "Active",
              amount: 100,
              color: "success-main"
            },
            {
              text: "Expired",
              amount: 254,
              color: "error-main"
            }
          ]
        }
      }
    }
  },
  {
    icon: "HiOutlineCalendar",
    title: "Days sales outstanding (DSO)",
    widgetValueVariant: {
      create: {
        items: {
          create: [
            {
              text: "Active",
              amount: 100,
              color: "success-main"
            },
            {
              text: "Expired",
              amount: 254,
              color: "error-main"
            }
          ]
        }
      }
    }
  }
]

const title = "Blue Sky"

const date = new Date()

const table = {
  columns: {
    create: [
      {
        statementId: "UR932R9K",
        startDate: new Date(date.setDate(date.getDate() - 6)),
        endDate: new Date(date.setDate(date.getDate() + 10)),
        depositDate: new Date(date.setDate(date.getDate() - 5)),
        amount: 2500
      }
    ]
  },
}

const chart = {
  chartOptions: {
    create: [
        { name: "Opportunities" },
        { name: "GSS" },
        { name: "Private Offers" },
        { name: "Active Subscribers" },
      ],
    },
  series: {
      create: [
        {
          name: "Total Count (AO + PO)",
          type: "column",
          data: {
            create: [
              { data: 80.5 },
              { data: 40 },
              { data: 45 },
              { data: 50 },
              { data: 49 },
              { data: 60 },
              { data: 70 },
              { data: 91 },
              { data: 110.44 },
              { data: 96 },
              { data: 44 },
              { data: 32 },
            ] 
          } 
        },
        {
          name: "AWS Originated Opportunities Tab",
          type: "line",
          data: {
            create: [
              { data: 23 },
              { data: 42 },
              { data: 35 },
              { data: 27 },
              { data: 12 },
              { data: 22 },
              { data: 10 },
              { data: 22 },
              { data: 22 },
              { data: 20 },
              { data: 12 },
              { data: 16 },
            ]
          }
        }
      ]
  }
}

const series = [
  {
    text: "GSS Goal",
    legend: "$10M",
    goal: 10000,
    current: 4000
  },
  {
    text: "PO Goal",
    legend: "1000 Offers",
    goal: 1000,
    current: 300
  },
  {
    text: "GSS Goal 2",
    legend: "$10M",
    goal: 10000,
    current: 5000
  }
]

const cards = [
  {
    title: "Top selling products",
    items: {
      create: [
        {
          title: "Cloud Monitoring Platform (AWS)",
          values: {
            create: [
              {
                title: "Total GSS",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 2",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 3",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              }
            ]
          }
        },
        {
          title: "Cloud Monitoring Platform (AWS) 2",
          values: {
            create: [
              {
                title: "Total GSS 4",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 5",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 6",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              }
            ]
          }
        },
        {
          title: "Cloud Monitoring Platform (AWS) 3",
          values: {
            create: [
              {
                title: "Total GSS 7",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 8",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              },
              {
                title: "Total GSS 9",
                amount: 750000,
                difference: 5200,
                status: "decrease"
              }
            ]
          }
        }
      ]
    },
  },
  {
    title: "Free Trials",
    difference: 5200,
    supportAmount: 7,
    supportText: "21 from last period",
    series: {
      create: [
        {
          name: "A",
          data: {
            create: [
              { value: 45 },
              { value: 52 },
              { value: 38 },
              { value: 24 },
              { value: 33 },
              { value: 26 },
              { value: 21 },
              { value: 20 },
              { value: 6 },
              { value: 8 },
              { value: 15 },
              { value: 10 },
            ],
          },
          color: "primary-main"
        },
        {
          name: "B",
          data: {
            create: [
            { value: 35 },
            { value: 41 },
            { value: 62 },
            { value: 42 },
            { value: 13 },
            { value: 18 },
            { value: 29 },
            { value: 37 },
            { value: 36 },
            { value: 51 },
            { value: 32 },
            { value: 35 },
          ]},
          color: "text-disable"
        }
      ]
    }
  },
  {
    title: "Opportunity Win Rate",
    difference: 5200,
    supportAmount: 7,
    supportText: "21 from last period",
    series: {
      create: [
        {
          name: "A",
          data: {
            create: [
              { value: 45 },
              { value: 52 },
              { value: 38 },
              { value: 24 },
              { value: 33 },
              { value: 26 },
              { value: 21 },
              { value: 20 },
              { value: 6 },
              { value: 8 },
              { value: 15 },
              { value: 10 },
            ]
          },
          color: "primary-main"
        },
        {
          name: "B",
          data: {
            create: [
              { value: 35 },
              { value: 41 },
              { value: 62 },
              { value: 42 },
              { value: 13 },
              { value: 18 },
              { value: 29 },
              { value: 37 },
              { value: 36 },
              { value: 51 },
              { value: 32 },
              { value: 35 },
            ],
          },
          color: "text-disable"
        }
      ]
    },
  },
  {
    title: "Combined investments",
    difference: 5200,
    supportAmount: 7,
    supportText: "21 from last period",
    series: {
      create: [
        {
          name: "A",
          data: {
            create: [
              { value: 45 },
              { value: 52 },
              { value: 38 },
              { value: 24 },
              { value: 33 },
              { value: 26 },
              { value: 21 },
              { value: 20 },
              { value: 6 },
              { value: 8 },
              { value: 15 },
              { value: 10 },
            ],
          },
          color: "primary-main"
        },
        {
          name: "B",
          data: {
            create: [
              { value: 35 },
              { value: 41 },
              { value: 62 },
              { value: 42 },
              { value: 13 },
              { value: 18 },
              { value: 29 },
              { value: 37 },
              { value: 36 },
              { value: 51 },
              { value: 32 },
              { value: 35 },
            ],
          },
          color: "text-disable"
        }
      ]
    }
  },
  {
    title: "Recent Activity",
    button: {
      create: {
        text: "View more"
      }
    },
    activities: {
      create: [
        {
          date: new Date(),
          subtitle: "CloudHealth SasS Listing on AWS",
          title: "PUBLISHED LISTING"
        },
        {
          date: new Date(),
          subtitle: "CloudHealth SasS Listing on AWS",
          title: "PUBLISHED LISTING 2",
          tags: {
            create: [
              {
                value: "DP",
                color: "info-main",
                backgroundColor: "info-lighter"
              },
              {
                value: "CS",
                color: "primary-main",
                backgroundColor: "primary-lighter"
              }
            ]
          }
        }
      ]
    }
  }
]

const main = async () => {
  const widget = await prisma.widget.findFirst()
  if(!widget) {
    widgets.forEach(async (widget) => {
      await prisma.widget.create({
        data: widget
      })
    })
  }

  const titleItem = await prisma.title.findFirst()
  if(!titleItem) {
    await prisma.title.create({
      data: {
        title: title,
      }
    })
  }

  const tableItem = await prisma.table.findFirst()
  if(!tableItem) {
    await prisma.table.create({
      data: table
    })
  }
  
  const chartItem = await prisma.chart.findFirst()
  if(!chartItem) {
    await prisma.chart.create({
      data: chart
    })
  }

  const seriesItem = await prisma.series.findFirst()
  if(!seriesItem) {
    series.forEach(async s => {
      await prisma.series.create({
        data: s
      })
    })
  }

  const anyCard = await prisma.card.findFirst()
  if(!anyCard) {
    cards.forEach(async card => {
      await prisma.card.create({
        data: card
      })
    })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})