import styles from "./Card.module.scss"
import { Pill } from "../Pill";
import { formatter } from "../../utils/formatter";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { CardProps } from "./Card.interface";
import { CardBarVariant } from "./components/CardBarVariant";
import { CardLineVariant } from "./components/CardLineVariant";
import { CardListVariant } from "./components/CardListVariant";
import { CardActiviesVariant } from "./components/CardActivitiesVariant";

export const Card =  ({
  title,
  status,
  difference,
  support,
  button,
  variant
}: CardProps) => {
  const Variant = (() => {
    switch(variant.name) {
      case "bar":
        return <CardBarVariant {...variant.props} />;
      case "line":
        return <CardLineVariant {...variant.props} />;
      case "list":
        return <CardListVariant {...variant.props} />;
      case "activities":
        return <CardActiviesVariant {...variant.props} />;
      default:
        return null;
    }
  })();

  return (
    <section aria-labelledby={title} className={styles.container}>
      <header>
        <div className={styles.column}>
          <div className={styles.row}>
            <h6 className="medium" id={title}>{title}</h6>
            {status && difference && <Pill text={formatter.toCompact(difference)} status={status} />}
          </div>

          {support && (
            <div className={styles.row}>
              <h6 className="medium">{support.amount}</h6>
              <p className="md regular">{support.text}</p>
            </div>
          )}
        </div>

        {button && (
          <Button variant="tertiary" size="extra-small" onClick={button?.onClick}>
            {button.icon && <Icon icon={button.icon} color="text-secondary" />}
            {button.text}
          </Button>
        )}
      </header>

      <article>
        {Variant}
      </article>
    </section>
  )
}